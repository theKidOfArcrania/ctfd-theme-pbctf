(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{444:function(t,e,n){var content=n(482);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("1ca6ba1f",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";n(444)},482:function(t,e,n){(e=n(83)(!1)).push([t.i,'.JoinTeam{text-align:center}.JoinTeam .title{margin-bottom:0}.JoinTeam .subtitle{margin-bottom:2rem;font-size:1.5rem}.JoinTeam .button{display:block;margin:1rem auto;width:18rem;height:3rem;line-height:3rem;border-radius:9999px;font-size:1.5rem;font-family:"Fredoka One",cursive;font-weight:300}.JoinTeam .button.join{background:linear-gradient(90deg,#3e91a6,#5e0fa9)}.JoinTeam .button.new{background:linear-gradient(90deg,#a6643e,#a90f5d)}',""]),t.exports=e},501:function(t,e,n){"use strict";n.r(e);n(21),n(11),n(9),n(6),n(18),n(85);var r=n(4),o=n(123),c=n(24);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{IsoLink:o.a},data:function(){return{isError:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["isInTeam","isVerified","isLoggedIn","team"])),mounted:function(){this.isVerified?this.isLoggedIn?this.isInTeam&&this.team&&this.team.id&&this.$router.replace({path:"/teams/".concat(this.team.id)}):this.$router.replace({path:"/login"}):this.$router.replace({path:"/confirm"})},head:function(){return{title:"Team - TSG CTF"}}},h=(n(481),n(29)),component=Object(h.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"JoinTeam"},[this._m(0),this._v(" "),e("div",{staticClass:"subtitle"},[this._v("In order to participate you must either join or create a team.")]),this._v(" "),e("iso-link",{staticClass:"button join",attrs:{to:"/teams/join"}},[this._v("Join Team")]),this._v(" "),e("iso-link",{staticClass:"button new",attrs:{to:"/teams/new"}},[this._v("Create Team")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("Join or Create Team")])])}],!1,null,null,null);e.default=component.exports}}]);