webpackJsonp([63],{ENoy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("sNXC"),i=n.n(o),r=n("4YfN"),c=n.n(r),s=n("R4Sj"),d=n("TVaK"),a={name:"ShelvesTree",data:function(){return{warehouseList:[],defaultProps:{label:"name"},contextmenuSelectedNode:null}},props:{clickedNodeData:{type:Object},selectedId:{type:String},shelveTreeData:{type:Array}},computed:c()({},Object(s.b)(["systemTheme"]),{selectedNode:function(){return this.clickedNodeData},systemColor:function(){return d.a[this.systemTheme]}}),methods:{showContextMenu:function(e,t,n,o){if(n){var i=this.$refs.tree,r=this.$refs.treeMenu;this.contextmenuSelectedNode=t,i.setCurrentKey(t.id),r.show({top:e.clientY,left:e.clientX})}},createShelve:function(){this.$emit("update:isCreate",!0),this.$emit("openDialog",this.contextmenuSelectedNode)},editShelve:function(){this.$emit("update:isCreate",!1),this.$emit("openDialog",this.contextmenuSelectedNode)},deleteShelve:function(){this.$emit("deleteNode",this.contextmenuSelectedNode)},customRender:function(e,t){var n=t.node,o=t.data,r=(t.store,this.$createElement);return r("span",i()([{class:"custom-tree-node"},{directives:[{name:"contextmenu",arg:"treeMenu"}]}]),[r("span",[n.label]),this.$refs.tree.getCurrentNode()&&o.id===this.$refs.tree.getCurrentNode().id&&r("span",{class:"active",style:{backgroundColor:this.systemColor}})])},handleNodeClick:function(e,t,n){this.$emit("nodeClick",{data:e,node:t,nodeCom:n})},createMore:function(){this.$emit("openCreateMoreDialog")}}},l=n("sEjx"),u=n.n(l);var m=function(e){n("l8Vm")},h=n("C7Lr")(a,u.a,!1,m,"data-v-8ee261dc",null);t.default=h.exports},l8Vm:function(e,t){},sEjx:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-contextmenu",{ref:"treeMenu"},[n("v-contextmenu-item",{on:{click:e.createShelve}},[e._v("新增")]),e._v(" "),n("v-contextmenu-item",{on:{click:e.editShelve}},[e._v("编辑")]),e._v(" "),n("v-contextmenu-item",{on:{click:e.deleteShelve}},[e._v("删除")]),e._v(" "),n("v-contextmenu-item",{on:{click:e.createMore}},[e._v("多库位生成")])],1),e._v(" "),n("el-tree",{ref:"tree",attrs:{data:e.shelveTreeData,"node-key":"id",props:e.defaultProps,"default-expand-all":"","expand-on-click-node":!1,"render-content":e.customRender},on:{"node-contextmenu":e.showContextMenu,"node-click":e.handleNodeClick}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=63.6e64151268ee099815c0.js.map