webpackJsonp([78],{ZP6G:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-contextmenu",{ref:"treeMenu"},[n("v-contextmenu-item",{on:{click:e.createOrg}},[e._v("新增机构")]),e._v(" "),n("v-contextmenu-item",{on:{click:e.editOrg}},[e._v("修改机构")]),e._v(" "),n("v-contextmenu-item",{attrs:{disabled:e.contextmenuSelectedNode&&""===e.contextmenuSelectedNode.pId},on:{click:e.deleteOrg}},[e._v("删除机构")])],1),e._v(" "),n("el-tree",{ref:"tree",attrs:{data:e.orgTreeData,"node-key":"id",props:e.defaultProps,"default-expand-all":"","expand-on-click-node":!1,"render-content":e.customRender},on:{"node-contextmenu":e.showContextMenu,"node-click":e.handleNodeClick}})],1)},staticRenderFns:[]}},a6JO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("sNXC"),r=n.n(o),i=n("4YfN"),c=n.n(i),a=n("R4Sj"),s=n("TVaK"),d=n("QPLA"),u=n("KWYu"),l={name:"OrganizationTree",data:function(){return{orgTreeData:[],contextmenuSelectedNode:null,defaultProps:{label:"orgName"}}},props:{clickedNodeData:{type:Object}},computed:c()({},Object(a.b)(["systemTheme"]),{selectedNode:function(){return this.clickedNodeData},systemColor:function(){return s.a[this.systemTheme]}}),mounted:function(){this.initOrgTree()},methods:{initOrgTree:function(){var e=this;Object(u.c)().then(function(t){e.orgTreeData=Object(d.a)(t),console.log(e.orgTreeData)})},handleNodeClick:function(e,t,n){this.$emit("nodeClick",{data:e,node:t,nodeCom:n})},showContextMenu:function(e,t,n,o){if(n){var r=this.$refs.tree,i=this.$refs.treeMenu;this.contextmenuSelectedNode=t,r.setCurrentKey(t.id),i.show({top:e.clientY,left:e.clientX})}},update:function(){this.initOrgTree()},createOrg:function(){this.$emit("update:isCreate",!0),this.$emit("openDialog","OrgUpdate",this.contextmenuSelectedNode)},editOrg:function(){this.$emit("update:isCreate",!1),this.$emit("openDialog","OrgUpdate",this.contextmenuSelectedNode)},deleteOrg:function(){var e=this,t=this.contextmenuSelectedNode,n=(t.name,t.id);if(n){this.$confirm("确认删除该机构及其下属机构吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(u.b)({orgUuid:n}).then(function(t){t.error||(e.$message({type:"success",message:"删除成功!"}),e.initOrgTree(),e.$emit("updateTree","delete"))})}).catch(function(){})}},customRender:function(e,t){var n=t.node,o=t.data,i=(t.store,this.$createElement);return i("span",r()([{class:"custom-tree-node"},{directives:[{name:"contextmenu",arg:"treeMenu"}]}]),[i("span",[n.label]),this.$refs.tree.getCurrentNode()&&o.id===this.$refs.tree.getCurrentNode().id&&i("span",{class:"active",style:{backgroundColor:this.systemColor}})])}}},m=n("ZP6G"),f=n.n(m);var h=function(e){n("piOk")},p=n("C7Lr")(l,f.a,!1,h,"data-v-64a075f4",null);t.default=p.exports},piOk:function(e,t){}});
//# sourceMappingURL=78.24a3a1a2e72890cdb4a0.js.map