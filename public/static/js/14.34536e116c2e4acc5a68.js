webpackJsonp([14],{Anrt:function(e,t){},hW44:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-wrapper",on:{wheel:function(t){return t.preventDefault(),e.handelScroll(t)}}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-content",style:{left:e.left+"px"}},[e._t("default")],2)])},staticRenderFns:[]}},huVo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Gu7T"),i=n.n(s),a=n("Dd8w"),o=n.n(a),r=n("NYxO"),l={name:"scrollPane",data:function(){return{handleWidth:35,left:0}},computed:{isShowHandle:function(){return!1}},methods:{handelScroll:function(e){var t=e.wheelDelta||4*-e.deltaY,n=this.$refs.scrollContainer.offsetWidth,s=this.$refs.scrollWrapper.offsetWidth;t>10?this.left=Math.min(0,this.left+t):n<s?this.left>=-(s-n)&&(this.left=Math.max(this.left+t,n-s)):this.left=0}}},c=n("hW44"),u=n.n(c);var h=function(e){n("sahS")},d=n("VU/8")(l,u.a,!1,h,"data-v-5c3f647a",null).exports,f=n("TVaK"),m={name:"TagTabs",data:function(){return{isDashboard:!1,isDisableCloseItem:!1}},computed:o()({},Object(r.b)(["visitedViews","tagTabHeight","systemTheme"]),{systemThemeColor:function(){return f.a[this.systemTheme]}}),watch:{$route:function(){this.addViewToVisided()}},mounted:function(){this.addViewToVisided()},methods:{isActive:function(e){return this.$route.path===e.path},isShowCloseBtn:function(e){return"/dash"!==e.path},addViewToVisided:function(){var e=this.$route.name?this.$route:null;e&&this.$store.dispatch("addVisitedViews",e)},closeTab:function(e){var t=this;this.$store.dispatch("removeVisitedViews",e).then(function(n){t.$nextTick(function(){var s=[].concat(i()(n.views)),a=n.theNextView;if(t.isActive(e)){var o=null===a&&s.slice(-1)[0];a?t.$router.push(a.path):o?t.$router.push(o.path):t.$router.push({path:"/",query:{t:(new Date).getTime()}})}})})},beforeShowContextmenu:function(e,t,n){var s=n.name;this.isDisableCloseItem="Dashboard"===s},closeTabByContextmenu:function(e,t,n){this.closeTab(n)}},components:{scrollPane:d}},p=n("rLer"),v=n.n(p);var b=function(e){n("Anrt")},w=n("VU/8")(m,v.a,!1,b,"data-v-385e7ebd",null);t.default=w.exports},rLer:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag-tabs",style:{height:e.tagTabHeight}},[n("v-contextmenu",{ref:"menu",on:{beforeShow:e.beforeShowContextmenu}},[n("v-contextmenu-item",{attrs:{disabled:e.isDisableCloseItem},on:{click:e.closeTabByContextmenu}},[e._v("关闭标签页")])],1),e._v(" "),n("scroll-pane",e._l(e.visitedViews,function(t){return n("router-link",{directives:[{name:"contextmenu",rawName:"v-contextmenu:menu",value:t,expression:"tab",arg:"menu"}],key:t.path,staticClass:"tab-item",class:{active:e.isActive(t),isShowCloseBtn:!e.isShowCloseBtn(t)},attrs:{tag:"div",to:t.path}},[n("span",[n("i",{class:t.meta.icon}),e._v(" "),n("span",{staticClass:"top-line",style:{background:e.systemThemeColor}}),e._v("\n        "+e._s(t.meta.title)+"\n      ")]),e._v(" "),e.isShowCloseBtn(t)?n("span",{staticClass:"close el-icon-close",on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.closeTab(t)}}}):e._e()])}))],1)},staticRenderFns:[]}},sahS:function(e,t){}});
//# sourceMappingURL=14.34536e116c2e4acc5a68.js.map