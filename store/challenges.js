import Vue from 'vue';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';

const categoryOrders = ['cooldown', 'warmup', 'pwn', 'rev', 'web', 'crypto', 'stego'];

export const state = () => ({
	challenges: [],
	challengeSolves: [],
	solves: new Set(),
});

export const getters = {
	getChallenges: (s) => s.challenges.map((challenge) => ({
		...challenge,
		solved: s.solves.has(challenge.id),
		solves: get(s.challengeSolves.find(({id}) => id === challenge.id), 'solves', 0),
	})),
	getCategories: (s, g) => Object.entries(groupBy(g.getChallenges, ({category}) => category))
		.map(([name, challenges]) => ({
			name,
			challenges: challenges.sort((a, b) => a.value - b.value),
		}))
		.sort((a, b) => {
      return a.name.localeCompare(b.name)
			//const orderA = categoryOrders.indexOf(a.name.toLowerCase());
			//const orderB = categoryOrders.indexOf(b.name.toLowerCase());
			//return (orderA === -1 ? 9999 : orderA) - (orderB === -1 ? 9999 : orderB);
		}),
};

export const mutations = {
	setChallenges(s, challenges) {
		const oldChallenges = s.challenges || [];
		s.challenges = challenges.map((challenge) => {
			const oldChallenge = oldChallenges.find(({id}) => id === challenge.id);

			if (!oldChallenge) {
				return challenge;
			}

			for (const [key, value] of Object.entries(challenge)) {
				Vue.set(oldChallenge, key, value);
			}
			return oldChallenge;
		});
	},
	setChallengeSolves(s, challengeSolves) {
		s.challengeSolves = challengeSolves;
	},
	setSolves(s, solves) {
		s.solves = new Set(solves.map((solve) => solve.challenge_id));
	},
	setChallengeDetail(s, {id, data}) {
		const target = s.challenges.findIndex((challenge) => challenge.id === id);
		Vue.set(s.challenges, target, {
			...s.challenges[target],
			details: data,
		});
	},
};

export const actions = {
	async updateChallenges({commit, dispatch, rootState}, {$axios}) {
		try {
			const {data, headers, request} = await $axios.get('/api/v1/challenges');
			if (headers['content-type'] === 'application/json') {
				commit('setIsStarted', true, {root: true});
				commit('setChallenges', data.data);

				if (rootState.isStatic) {
					await Promise.all(data.data.map(({id}) => (
						dispatch('getDetail', {$axios, id})
					)));
				}
			} else {
				const url = new URL(request.responseURL);
				if (url.pathname === '/team') {
					commit('setIsInTeam', false, {root: true});
				} else if (url.pathname === '/confirm') {
					commit('setIsVerified', false, {root: true});
				} else {
					commit('setIsLoggedIn', false, {root: true});
				}
				return;
			}
		} catch (error) {
			const message = get(error, ['response', 'data', 'message'], '');
			if (message.includes('not started')) {
				commit('setIsStarted', false, {root: true});
			} else if (message.includes('has ended')) {
				commit('setIsEnded', true, {root: true});
			} else {
				commit('setIsInTeam', false, {root: true});
			}
			return;
		}

		await dispatch('updateSolved', {$axios});
	},
	async updateChallengeSolves({commit, dispatch, rootState}, {$axios}) {
		try {
			const {data, headers, request} = await $axios.get('/api/v1/challenges/solves');
			if (headers['content-type'] === 'application/json') {
				commit('setIsStarted', true, {root: true});
				commit('setChallengeSolves', data.data);
			} else {
				const url = new URL(request.responseURL);
				if (url.pathname === '/team') {
					commit('setIsInTeam', false, {root: true});
				} else if (url.pathname === '/confirm') {
					commit('setIsVerified', false, {root: true});
				} else {
					commit('setIsLoggedIn', false, {root: true});
				}
			}
		} catch (error) {

		}
	},
	async updateSolved({commit}, {$axios}) {
		const {data, headers, request} = await $axios.get('/api/v1/teams/me/solves');
		if (headers['content-type'] === 'application/json') {
			commit('setSolves', data.data);
		} else {
			const url = new URL(request.responseURL);
			if (url.pathname === '/team') {
				commit('setIsInTeam', false, {root: true});
			} else if (url.pathname === '/confirm') {
				commit('setIsVerified', false, {root: true});
			} else {
				commit('setIsLoggedIn', false, {root: true});
			}
		}
	},
	async getDetail({commit}, {$axios, id}) {
		const {data, headers, request} = await $axios.get(`/api/v1/challenges/${id}`);
		if (headers['content-type'] === 'application/json') {
			commit('setChallengeDetail', {id, data: data.data});
		} else {
			const url = new URL(request.responseURL);
			if (url.pathname === '/team') {
				commit('setIsInTeam', false, {root: true});
			} else if (url.pathname === '/confirm') {
				commit('setIsVerified', false, {root: true});
			} else {
				commit('setIsLoggedIn', false, {root: true});
			}
		}
	},
};
