webpackJsonp([94],{HiZM:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("aA9S"),n=e.n(s),o=(e("KWYu"),{name:"OrgDetail",data:function(){return{orgNodeData:null}},props:{nodeData:{type:Object,required:!0}},watch:{nodeData:{handler:function(t){this.getDetail()},deep:!0}},methods:{refresh:function(t){this.getDetail()},initDetail:function(){this.orgNodeData=null},getDetail:function(){this.nodeData&&(this.orgNodeData=n()({},this.nodeData))}}}),l=e("YCbL"),i=e.n(l);var r=function(t){e("q5VS")},c=e("C7Lr")(o,i.a,!1,r,"data-v-3fe8f154",null);a.default=c.exports},YCbL:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"org-content"},[t.orgNodeData?e("div",{staticClass:"main-content"},[e("div",{staticClass:"org-form"},[e("el-row",[e("el-col",{attrs:{span:12}},[e("span",{staticClass:"label"},[t._v("机构全称")]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.orgNodeData.orgName))])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("span",{staticClass:"label"},[t._v("机构简称")]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.orgNodeData.name))])])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:12}},[e("span",{staticClass:"label"},[t._v("上级机构")]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.orgNodeData.pName||t.orgNodeData.name))])])],1),t._v(" "),e("el-row"),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("span",{staticClass:"label"},[t._v("机构描述")]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.orgNodeData.orgDesc))])])],1)],1)]):e("div",{staticClass:"empty"},[e("h3",[t._v("请在左侧选择一个机构")]),t._v(" "),e("h5",[t._v("右击节点可进行操作")])])])},staticRenderFns:[]}},q5VS:function(t,a){}});
//# sourceMappingURL=94.1587ea40c817ffbba70f.js.map