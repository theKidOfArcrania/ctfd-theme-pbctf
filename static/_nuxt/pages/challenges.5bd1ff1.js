(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{418:function(e,t,n){var content=n(420);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("53eee732",content,!0,{sourceMap:!1})},419:function(e,t,n){"use strict";var r=n(418);n.n(r).a},420:function(e,t,n){(t=n(87)(!1)).push([e.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),e.exports=t},423:function(e,t,n){"use strict";var r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(n(419),n(28)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[t("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),t("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),t("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])}),[],!1,null,null,null);t.a=component.exports},426:function(e,t,n){var content=n(452);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("4313fac7",content,!0,{sourceMap:!1})},427:function(e,t,n){var content=n(456);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("76f3c576",content,!0,{sourceMap:!1})},451:function(e,t,n){"use strict";var r=n(426);n.n(r).a},452:function(e,t,n){var r=n(87),o=n(194),l=n(453),c=n(454);t=r(!1);var d=o(l),h=o(c);t.push([e.i,".Challenge{margin-bottom:10px;display:flex;text-align:left;background:rgba(0,0,0,.2);border-radius:.5rem}.Challenge .list-marker{flex:0 0 48px;position:relative}.Challenge .list-marker .checkbox{width:42px;height:42px;position:absolute;top:3px;left:0;background:url("+d+");background-size:cover;opacity:.8}.Challenge .list-marker .checkbox.solved{background:url("+h+')}.Challenge .list-content{width:100%}.Challenge:not(:last-child) .list-marker:before{content:"";position:absolute;background:hsla(0,0%,100%,.5);top:46px;left:20px;bottom:-10px;width:3px;border-radius:3px}.Challenge .title{font-size:2.5rem;font-family:Roboto,cursive;font-weight:300;display:inline-block;letter-spacing:1px;cursor:pointer}.Challenge .title-name{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#ffdb4d,#ff0);-webkit-background-clip:text;background-clip:text}.Challenge .points{background:hsla(0,0%,100%,.6);display:inline-block;color:#0d030e;-webkit-text-fill-color:#0d030e;font-size:1.2rem;margin-left:.2rem;padding:.1rem .3rem;vertical-align:middle;letter-spacing:0;border-radius:3px}.Challenge .subtitle{line-height:2rem}.Challenge .tag{margin:0 .3rem;padding:.2rem .8rem;background:hsla(0,0%,100%,.5);color:#333;border-radius:10rem;font-weight:700;font-size:.8rem}.Challenge .tag.beginner{background:#52baff}.Challenge .tag.broken{background:#ff5252}.Challenge .content{background:hsla(0,0%,42.4%,.5);padding:1rem;width:auto;box-sizing:border-box;border-radius:1rem;position:relative;border-top-right-radius:0;margin:1rem 2rem 1.5rem .5rem}.Challenge .solves{background:#2f2f44;position:absolute;bottom:100%;right:0;padding:0 .3rem;border-radius:5px;border-bottom-right-radius:0;border-bottom-left-radius:0}.Challenge .solves.someone-solved{background:#ff5722}.Challenge .solves.solved{background:#4caf50}.Challenge .description{font-size:1.2rem;margin-bottom:1rem;font-family:Roboto,sans-serif;letter-spacing:.05em;display:flex}.Challenge .description .description-column{flex:1 0 0;padding:0 .5rem}.Challenge .description .description-column:nth-child(2) p{font-weight:400;letter-spacing:0}.Challenge .description strong{color:#ffeb3b}.Challenge .description p{margin:.5rem 0;font-weight:700}.Challenge .description a{color:#03a9f4}.Challenge .description code{background:#10333f;padding:.1rem .5rem;color:orange;border-radius:.2em}.Challenge .description blockquote{padding:.5em 1em .5em .75em;border-left:3px solid #fff;margin:.5em 1em;display:block;background:hsla(0,0%,100%,.08)}.Challenge .description pre{background:#10333f;border-radius:.2em;padding:.5rem;white-space:pre-line}.Challenge .description pre code{background:transparent;padding:0}.Challenge .description hr{opacity:.4;margin:1.5rem 1rem}.Challenge .description img{max-width:100%}.Challenge .attachments{display:flex;flex-wrap:wrap}.Challenge .attachment{width:15rem;margin:.5rem;height:3rem;line-height:3rem;background:#222;border-radius:3px;text-align:center}.Challenge .attachment:before{content:"";background:url(https://cdn.jsdelivr.net/gh/google/material-design-icons@2.2.0/file/2x_web/ic_attachment_white_18dp.png);background-size:cover;display:inline-block;width:1.4rem;height:1.4rem;vertical-align:middle}.Challenge .description-loading{height:6rem;display:flex;justify-content:center;align-items:center}.Challenge .flag-form{display:flex;margin-top:1rem}.Challenge .flag-input{flex:1 1 0;width:0;height:2.5rem;border-radius:9999px;margin-right:.5rem;padding:0 1rem;font-family:Roboto,sans-serif;font-size:1.4rem;background:#ddd;color:#333}.Challenge .flag-input[disabled]{background:#aaa;color:#000}.Challenge .flag-input.yay{background:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab);background-size:1000% 1000%;-webkit-animation:Gradient 3s ease-out 1 both;animation:Gradient 3s ease-out 1 both;color:#fff;font-size:2rem;font-family:Roboto,cursive;font-weight:300}@-webkit-keyframes Gradient{0%{background-position:0 50%}to{background-position:100% 50%}}@keyframes Gradient{0%{background-position:0 50%}to{background-position:100% 50%}}.Challenge .flag-input.boo{-webkit-animation-name:shake;animation-name:shake;-webkit-animation-duration:.7s,.35s;animation-duration:.7s,.35s;-webkit-animation-iteration-count:1,2;animation-iteration-count:1,2}@-webkit-keyframes shake{0%,20%,40%,60%,80%{transform:translateX(8px)}50%{color:#cd5c5c}10%,30%,50%,70%,90%{transform:translateX(-8px)}}@keyframes shake{0%,20%,40%,60%,80%{transform:translateX(8px)}50%{color:#cd5c5c}10%,30%,50%,70%,90%{transform:translateX(-8px)}}.Challenge .flag-submit{flex:0 0 6rem}.Challenge .flag-submit[disabled]{cursor:default;background:#888}',""]),e.exports=t},453:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+DQogIDx0aXRsZT5jaGVja2JveF9vZmY8L3RpdGxlPg0KICA8cGF0aCBkPSJNMTYsNS45NEExMC4wNiwxMC4wNiwwLDEsMCwyNi4wNiwxNiwxMC4wNSwxMC4wNSwwLDAsMCwxNiw1Ljk0Wk0yMSwyMWE3LjEsNy4xLDAsMSwxLDIuMDgtNUE3LDcsMCwwLDEsMjEsMjFaIiBzdHlsZT0iZmlsbDogI2ZmZiIvPg0KPC9zdmc+DQo="},454:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+DQogIDx0aXRsZT5jaGVja2JveDwvdGl0bGU+DQogIDxnIHN0eWxlPSJvcGFjaXR5OiAwLjgxIj4NCiAgICA8cGF0aCBkPSJNMTEuMiwxNS44NSwxNS42MywyMGEyLDIsMCwwLDAsMi44My0uMTJsMTMtMTQuNjNhMiwyLDAsMSwwLTIuOTUtMi42M0wxNi44NywxNS43NmwtMy0yLjc5YTIsMiwwLDEsMC0yLjcxLDIuODhaIiBzdHlsZT0iZmlsbDogIzAwZTYwMCIvPg0KICA8L2c+DQogIDxwYXRoIGQ9Ik0yMi44MSwxOEE3LjE0LDcuMTQsMCwwLDEsMjEsMjEsNy4xMSw3LjExLDAsMSwxLDE5LjUsOS44M2wyLTIuMjVBMTAuMDYsMTAuMDYsMCwxLDAsMjYuMDYsMTZhMTAuNjEsMTAuNjEsMCwwLDAtLjEyLTEuNTFaIiBzdHlsZT0iZmlsbDogIzAwZTYwMDtvcGFjaXR5OiAwLjgxIi8+DQo8L3N2Zz4NCg=="},455:function(e,t,n){"use strict";var r=n(427);n.n(r).a},456:function(e,t,n){(t=n(87)(!1)).push([e.i,'.Challenges{max-width:800px;margin:0 auto;min-height:100vh}.Challenges .title{margin-bottom:0;word-break:break-word}.Challenges .hide-solved{text-align:center;font-family:Roboto;font-size:1.2rem}.Challenges .ended{font-size:2rem;font-family:Roboto,cursive;font-weight:300;text-transform:uppercase;letter-spacing:1px;margin-bottom:1rem;word-break:break-word}.Challenges .category,.Challenges .ended{text-align:center;margin-top:3rem}.Challenges .category-name{display:inline-block;text-transform:capitalize;font-family:Roboto;font-size:2rem;text-align:center;padding:.5rem 1rem;background:#520514;position:relative;margin-bottom:1rem}.Challenges .category-name:before{content:"";position:absolute;border:1px dashed #fff;top:.2rem;left:.2rem;right:.2rem;bottom:.2rem;opacity:.5}.Challenges .challenges{list-style:none;padding:0}.Challenges .not-started{text-align:center;font-size:2.5rem;font-family:Roboto,cursive;font-weight:300;padding:0;margin-top:6rem;line-height:2rem}',""]),e.exports=t},487:function(e,t,n){"use strict";n.r(t);n(21),n(11),n(17),n(10),n(6),n(20),n(12);var r=n(2),o=(n(63),n(4)),l=n(34);n(128);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={components:{PulseLoader:n(423).a},props:{challenge:{required:!0,type:Object}},data:function(){return{isOpen:!1,yay:!1,boo:!1,flagText:""}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)(["isEnded","isStatic"])),methods:{onClickTitle:function(){this.isOpen?this.isOpen=!1:(this.isStatic||this.$store.dispatch("challenges/getDetail",{$axios:this.$axios,id:this.challenge.id}),this.isOpen=!0)},getFileName:function(path){var e=new URL(path,location.href).pathname.split("/");return e[e.length-1]},getFileLink:function(path){if(!this.isStatic)return path;var e=new URL(path,location.href).pathname.split("/"),t=e[e.length-1],n=e[e.length-2];return"https://storage.googleapis.com/pbctf-2020-ctfd/".concat(n,"/").concat(t)},getSolvesText:function(e){return"".concat(e," ").concat(1===e?"solve":"solves")},getPlaceholderText:function(e){return e.solved?"You already solved this challenge!":this.isEnded?"Contest has been ended":"flag{......}"},onSubmitFlag:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var form,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t.boo=!1,form=new FormData(e.target),r=form.get("flag"),n.next=6,t.$axios.post("/api/v1/challenges/attempt",{challenge_id:parseInt(t.challenge.id),submission:r},{headers:{"content-type":"application/json"}});case 6:if(o=n.sent,"correct"!==o.data.data.status){n.next=15;break}return t.yay=!0,t.flagText="Brilliant!",n.next=13,t.$store.dispatch("challenges/updateChallenges",{$axios:t.$axios});case 13:n.next=16;break;case 15:t.boo=!0;case 16:case"end":return n.stop()}}),n)})))()}}},h=(n(451),n(28));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{Challenge:Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Challenge"},[n("div",{staticClass:"list-marker"},[n("div",{staticClass:"checkbox",class:{solved:e.challenge.solved}})]),e._v(" "),n("div",{staticClass:"list-content"},[n("div",{staticClass:"title",on:{click:e.onClickTitle}},[n("span",{staticClass:"title-name"},[e._v(e._s(e.challenge.name))]),e._v(" "),n("span",{staticClass:"points"},[e._v(" "+e._s(e.challenge.value)+"pts ")])]),e._v(" "),n("div",{staticClass:"subtitle"},[e._v("\n\t\t\t"+e._s(e.challenge.solves)+" solves -\n\t\t\t"),e._l(e.challenge.tags,(function(t){return n("span",{key:t.value,staticClass:"tag",class:[t.value]},[e._v("\n\t\t\t\t"+e._s(t.value)+"\n\t\t\t")])}))],2),e._v(" "),e.isOpen?n("div",{staticClass:"content"},[e.challenge.details?n("div",{staticClass:"details"},[n("div",{staticClass:"solves",class:{"someone-solved":e.challenge.details.solves>0,solved:e.challenge.solved}},[e._v("\n\t\t\t\t\t"+e._s(e.getSolvesText(e.challenge.details.solves))+"\n\t\t\t\t")]),e._v(" "),n("div",{staticClass:"description"},e._l(e.challenge.details.description.split(/^---$/m),(function(t,i){return n("div",{key:i,staticClass:"description-column",domProps:{innerHTML:e._s(e.$md.render(t))}})})),0),e._v(" "),n("div",{staticClass:"attachments"},e._l(e.challenge.details.files,(function(t){return n("a",{key:t,staticClass:"attachment",attrs:{href:e.getFileLink(t),target:"_blank",rel:"noopener"}},[e._v("\n\t\t\t\t\t\t"+e._s(e.getFileName(t))+"\n\t\t\t\t\t")])})),0)]):n("div",{staticClass:"description-loading"},[n("pulse-loader",{attrs:{color:"white"}})],1),e._v(" "),n("form",{staticClass:"flag-form",on:{submit:e.onSubmitFlag}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.flagText,expression:"flagText"}],staticClass:"flag-input",class:{yay:e.yay,boo:e.boo},attrs:{type:"text",name:"flag",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",readonly:e.yay,placeholder:e.getPlaceholderText(e.challenge),disabled:e.challenge.solved||e.isEnded},domProps:{value:e.flagText},on:{input:function(t){t.target.composing||(e.flagText=t.target.value)}}}),e._v(" "),n("button",{staticClass:"flag-submit",attrs:{type:"submit",disabled:e.yay||e.challenge.solved||e.isEnded}},[e._v("Send")])])]):e._e()])])}),[],!1,null,null,null).exports},data:function(){return{melody:0,isHideSolved:!1}},computed:f(f({},Object(l.b)({categories:"challenges/getCategories"})),Object(l.c)({isStatic:"isStatic",isLoggedIn:"isLoggedIn",isStarted:"isStarted",isEnded:"isEnded",isVerified:"isVerified",isInTeam:"isInTeam",challenges:function(e){return e.challenges.challenges}})),watch:{isInTeam:function(e){!1===e&&this.$router.replace({path:"/team"})}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.store.dispatch("updateDates",e),e.store.dispatch("challenges/updateChallenges",e),e.store.dispatch("challenges/updateChallengeSolves",e)]);case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;this.isStatic||this.isVerified?this.isStatic||this.isLoggedIn?(this.isStatic||this.isInTeam||this.$router.replace({path:"/team"}),this.melody=Math.floor(4*Math.random()),this.isStatic||(this.interval=setInterval((function(){e.$store.dispatch("updateDates",{$axios:e.$axios}),e.$store.dispatch("challenges/updateChallenges",{$axios:e.$axios}),e.$store.dispatch("challenges/updateChallengeSolves",{$axios:e.$axios})}),6e4))):this.$router.replace({path:"/login"}):this.$router.replace({path:"/confirm"})},destroyed:function(){clearInterval(this.interval)},head:function(){return{title:"Challenges - CSG CTF Workshop"}}},y=(n(455),Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"Challenges"},[e._m(0),e._v(" "),e.isStarted?n("div",{staticClass:"hide-solved"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isHideSolved,expression:"isHideSolved"}],attrs:{id:"checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.isHideSolved)?e._i(e.isHideSolved,null)>-1:e.isHideSolved},on:{change:function(t){var n=e.isHideSolved,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.isHideSolved=n.concat([null])):l>-1&&(e.isHideSolved=n.slice(0,l).concat(n.slice(l+1)))}else e.isHideSolved=o}}}),e._v(" "),n("label",{attrs:{for:"checkbox"}},[e._v("Hide solved")])]):e._e(),e._v(" "),e.isEnded?n("div",{staticClass:"ended"},[e._v("CSG CTF Workshop has been ended!"),n("br"),e._v("Thank you for your pariticipation!")]):e._e(),e._v(" "),e.isStarted?n("div",e._l(e.categories,(function(t){return n("div",{key:t.name,staticClass:"category"},[n("h3",{staticClass:"category-name"},[e._v(e._s(t.name))]),e._v(" "),n("ul",{staticClass:"challenges"},e._l(t.challenges.filter((function(t){var n=t.solved;return!e.isHideSolved||!n})),(function(e){return n("challenge",{key:e.id,attrs:{challenge:e}})})),1)])})),0):n("div",{staticClass:"not-started"},[n("p",[e._v("CTF has not started yet. Stay Tuned!")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"title"},[t("span",[this._v("Challenges")])])}],!1,null,null,null));t.default=y.exports}}]);