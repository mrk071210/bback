webpackJsonp([104],{"04mZ":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("fBur");var a={name:"Cascader",data:function(){return{shelves:[]}},props:{defaultShelves:{type:Array},shelveTreeData:{type:Array},defaultProps:{type:Object}},mounted:function(){this.shelves=this.defaultShelves},methods:{shelvesChange:function(e){this.$emit("change",e)}}},n=s("IhUh"),r=s.n(n);var l=function(e){s("MYrO")},o=s("C7Lr")(a,r.a,!1,l,"data-v-2983dd46",null);t.default=o.exports},IhUh:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{attrs:{inline:!0}},[s("el-form-item",{attrs:{label:"请选择库位："}},[s("el-cascader",{attrs:{options:e.shelveTreeData,props:e.defaultProps},on:{change:e.shelvesChange},model:{value:e.shelves,callback:function(t){e.shelves=t},expression:"shelves"}})],1)],1)},staticRenderFns:[]}},MYrO:function(e,t){}});
//# sourceMappingURL=104.f6d9c7da995e1e375a8b.js.map