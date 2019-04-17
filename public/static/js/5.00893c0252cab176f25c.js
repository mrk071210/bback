webpackJsonp([5,50,69,85,95],{"+UXb":function(e,t){},"1wbY":function(e,t){},"5+l1":function(e,t){},B8z6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("sNXC"),a=r.n(o),s=r("4YfN"),l=r.n(s),i=r("R4Sj"),n=r("TVaK"),c={name:"ShelvesTree",data:function(){return{warehouseList:[],defaultProps:{label:"name"},contextmenuSelectedNode:null}},props:{clickedNodeData:{type:Object},selectedId:{type:String},shelveTreeData:{type:Array}},computed:l()({},Object(i.b)(["systemTheme"]),{selectedNode:function(){return this.clickedNodeData},systemColor:function(){return n.a[this.systemTheme]}}),methods:{showContextMenu:function(e,t,r,o){if(r){var a=this.$refs.tree,s=this.$refs.treeMenu;this.contextmenuSelectedNode=t,a.setCurrentKey(t.id),s.show({top:e.clientY,left:e.clientX})}},createShelve:function(){this.$emit("update:isCreate",!0),this.$emit("openDialog",this.contextmenuSelectedNode)},editShelve:function(){this.$emit("update:isCreate",!1),this.$emit("openDialog",this.contextmenuSelectedNode)},deleteShelve:function(){this.$emit("deleteNode",this.contextmenuSelectedNode)},customRender:function(e,t){var r=t.node,o=t.data,s=(t.store,this.$createElement);return s("span",a()([{class:"custom-tree-node"},{directives:[{name:"contextmenu",arg:"treeMenu"}]}]),[s("span",[r.label]),this.$refs.tree.getCurrentNode()&&o.id===this.$refs.tree.getCurrentNode().id&&s("span",{class:"active",style:{backgroundColor:this.systemColor}})])},handleNodeClick:function(e,t,r){this.$emit("nodeClick",{data:e,node:t,nodeCom:r})},createMore:function(){this.$emit("openCreateMoreDialog")}}},d=r("u/UE"),u=r.n(d);var m=function(e){r("iYtc")},g=r("C7Lr")(c,u.a,!1,m,"data-v-3ebfd84a",null);t.default=g.exports},VpGZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("B8z6"),a=r("wppO"),s=r.n(a),l=r("QPLA"),i=r("I8tE"),n=r("zDJI"),c=r("WLVd"),d=r("p5yg"),u=r("fBur"),m={name:"ShelvesManager",mixins:[r("dF+P").a],data:function(){return{warehouseList:this.$store.getters.warehouseList,shelveTreeData:[],selectedId:"",clickedNodeData:{},selectedData:{},isCreate:!1,showUpdateDialog:!1,showCreateMoreDialog:!1,showTree:!1}},mounted:function(){this.showTree=!0,this.selectedId=Object(u.b)("warehouseUuid")?Object(u.b)("warehouseUuid"):this.warehouseList[0].warehouseUuid,this.updateTree()},methods:{handleNodeClick:function(e){var t=e.data;e.node,e.nodeCom;this.clickedNodeData=t},updateTree:function(){var e=this;Object(u.e)("warehouseUuid",this.selectedId);var t={storageWarehouseUuid:this.selectedId};Object(i.k)(t).then(function(t){e.shelveTreeData=Object(l.a)(t)})},openDialog:function(e){this.selectedData=e,this.showUpdateDialog=!0},openCreateMoreDialog:function(){this.showCreateMoreDialog=!0},deleteNode:function(e){var t=this;this.$confirm("该库位下有子库位，确认删除吗?","提示",{type:"warning"}).then(function(){var r={storageUuid:e.id};Object(i.c)(r).then(function(e){e.error||(t.$message({message:"删除成功",type:"success"}),t.updateTree())})}).catch(function(){})},deleteShelvesList:function(e){var t=this;Object(i.d)(e).then(function(e){e.error||(t.$message({message:"删除成功",type:"success"}),t.updateTree())})}},components:{Tree:o.default,VuePerfectScrollbar:s.a,ShelvesDetail:n.default,ShelvesCreate:c.default,CreateMore:d.default}},g=r("Xfl/"),h=r.n(g);var p=function(e){r("+UXb")},f=r("C7Lr")(m,h.a,!1,p,"data-v-f72c936e",null);t.default=f.exports},W2dY:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{width:"670px",title:(e.isCreate?"新增":"编辑")+"库位",visible:e.isVisible},on:{"update:visible":function(t){e.isVisible=t},close:e.cancel}},[r("div",{staticClass:"org-form"},[r("el-form",{ref:"orgForm",attrs:{inline:!0,model:e.orgForm,rules:e.orgFormRules,disabled:e.isFormDisabled,"label-width":"100px"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"库位名称",prop:"storageName"}},[r("el-input",{model:{value:e.orgForm.storageName,callback:function(t){e.$set(e.orgForm,"storageName",t)},expression:"orgForm.storageName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"类型",prop:"storageType"}},[r("el-input",{model:{value:e.orgForm.storageType,callback:function(t){e.$set(e.orgForm,"storageType",t)},expression:"orgForm.storageType"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"编号",prop:"storageId"}},[r("el-input",{model:{value:e.orgForm.storageId,callback:function(t){e.$set(e.orgForm,"storageId",t)},expression:"orgForm.storageId"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"容量",prop:"storageCapacity"}},[r("el-input",{model:{value:e.orgForm.storageCapacity,callback:function(t){e.$set(e.orgForm,"storageCapacity",t)},expression:"orgForm.storageCapacity"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"长度",prop:"storageLength"}},[r("el-input",{model:{value:e.orgForm.storageLength,callback:function(t){e.$set(e.orgForm,"storageLength",t)},expression:"orgForm.storageLength"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"宽度",prop:"storageWidth"}},[r("el-input",{model:{value:e.orgForm.storageWidth,callback:function(t){e.$set(e.orgForm,"storageWidth",t)},expression:"orgForm.storageWidth"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"状态",prop:"orgEnabled"}},[r("el-radio-group",{attrs:{value:e.orgForm.storageStatus},model:{value:e.orgForm.storageStatus,callback:function(t){e.$set(e.orgForm,"storageStatus",t)},expression:"orgForm.storageStatus"}},[r("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:0}},[e._v("禁用")])],1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"描述",prop:"storageDesc"}},[r("el-input",{staticStyle:{width:"495px"},attrs:{type:"textarea",maxlength:"200",rows:5,placeholder:"填写库位描述,最长200字符",clearable:""},model:{value:e.orgForm.storageDesc,callback:function(t){e.$set(e.orgForm,"storageDesc",t)},expression:"orgForm.storageDesc"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{staticClass:"flex-right",attrs:{span:24}},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),r("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1)])},staticRenderFns:[]}},WLVd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("4YfN"),a=r.n(o),s=r("aA9S"),l=r.n(s),i=(r("4+6g"),r("I8tE")),n={storageStatus:"1"},c={name:"ShelvesCreate",data:function(){return{showDetailMode:!0,isVisible:!1,isFormDisabled:!1,organization:[],orgForm:l()({},n),orgFormRules:{storageName:[{required:!0,message:"请填写库位名称",trigger:"blur"},{max:30,message:"最大长度为30字符",trigger:"blur"}],storageType:[{required:!0,message:"请填写库位类型",trigger:"blur"},{max:30,message:"最大长度为30字符",trigger:"blur"}],storageId:[{required:!0,message:"请输入库位编号",trigger:"blur"},{max:30,message:"最大长度为30字符",trigger:"blur"}]}}},props:{show:{type:Boolean,required:!0,default:!1},nodeData:{type:Object,required:!0},isCreate:{type:Boolean,required:!0},selectedId:{type:String,required:!0}},watch:{show:function(e){e&&(this.isCreate?this.setToCreateState():this.setToEditState()),this.isVisible=e}},methods:{setToCreateState:function(){this.nodeData?(this.orgForm=l()({},n),this.orgForm.storagePid=this.nodeData.id):(this.$message({message:"未找到父节点,无法在此情况下创建组织结构.",type:"error"}),this.isFormDisabled=!0)},setToEditState:function(){this.orgForm=l()({},this.nodeData)},save:function(){var e=this;this.$refs.orgForm.validate(function(t){if(t){var r=e.isCreate?"新增":"修改",o=a()({storageWarehouseUuid:e.selectedId,isCreate:e.isCreate},e.orgForm);console.log(o),Object(i.G)(o).then(function(t){t.error||(e.$message({message:r+"成功!",type:"success"}),e.$emit("updateTree"),e.cancel())})}})},cancel:function(){this.isVisible=!1,this.$emit("update:show",!1),this.orgForm=l()({},n),this.$refs.orgForm.resetFields()}}},d=r("W2dY"),u=r.n(d);var m=function(e){r("dwhw")},g=r("C7Lr")(c,u.a,!1,m,"data-v-525142f0",null);t.default=g.exports},"Xfl/":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shelves"},[r("div",{staticClass:"main"},[r("div",{staticClass:"left-tree"},[r("div",{staticClass:"warehouseList"},[r("span",[e._v("仓库")]),e._v(" "),r("el-select",{attrs:{filterable:""},on:{change:e.updateTree},model:{value:e.selectedId,callback:function(t){e.selectedId=t},expression:"selectedId"}},e._l(e.warehouseList,function(e,t){return r("el-option",{key:t,attrs:{label:e.warehouseName,value:e.warehouseUuid}})}),1)],1),e._v(" "),r("VuePerfectScrollbar",{staticClass:"scroll-area"},[e.showTree?r("tree",{ref:"tree",attrs:{selectedId:e.selectedId,clickedNodeData:e.clickedNodeData,isCreate:e.isCreate,shelveTreeData:e.shelveTreeData},on:{"update:isCreate":function(t){e.isCreate=t},"update:is-create":function(t){e.isCreate=t},nodeClick:e.handleNodeClick,openDialog:e.openDialog,deleteNode:e.deleteNode,updateTree:e.updateTree,openCreateMoreDialog:e.openCreateMoreDialog}}):e._e()],1)],1),e._v(" "),r("div",{staticClass:"shelves-content"},[r("shelves-detail",{ref:"shelvesDetail",attrs:{selectedId:e.selectedId,isCreate:e.isCreate,nodeData:e.clickedNodeData},on:{"update:isCreate":function(t){e.isCreate=t},"update:is-create":function(t){e.isCreate=t},tableUpdate:e.updateTree,openDialog:e.openDialog,deleteShelvesList:e.deleteShelvesList}})],1)]),e._v(" "),r("shelves-create",{attrs:{selectedId:e.selectedId,show:e.showUpdateDialog,isCreate:e.isCreate,nodeData:e.selectedData},on:{"update:show":function(t){e.showUpdateDialog=t},"update:isCreate":function(t){e.isCreate=t},"update:is-create":function(t){e.isCreate=t},updateTree:e.updateTree}}),e._v(" "),r("create-more",{attrs:{selectedId:e.selectedId,show:e.showCreateMoreDialog},on:{"update:show":function(t){e.showCreateMoreDialog=t},updateTree:e.updateTree}})],1)},staticRenderFns:[]}},dwhw:function(e,t){},"iJj/":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shelves-content"},[e.showTable?r("div",{staticClass:"content"},[r("el-row",{attrs:{span:24}},[r("el-col",[r("common-table",[r("template",{slot:"table"},[r("el-table",{ref:"shelvesTable",attrs:{stripe:"",data:e.leafNode},on:{"selection-change":function(t){return e.selectRow=t}}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{sortable:"",prop:"name",label:"库位名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"type",label:"库位类型"}}),e._v(" "),r("el-table-column",{attrs:{sortable:"",prop:"number",label:"库位编号"}}),e._v(" "),r("el-table-column",{attrs:{sortable:"",prop:"size",label:"容量"}}),e._v(" "),r("el-table-column",{attrs:{sortable:"",prop:"length",label:"长度"}}),e._v(" "),r("el-table-column",{attrs:{sortable:"",prop:"width",label:"宽度"}}),e._v(" "),r("el-table-column",{attrs:{prop:"wareHouseName",label:"所属仓库"}}),e._v(" "),r("el-table-column",{attrs:{prop:"desc",label:"描述"}})],1)],1)],2)],1)],1)],1):r("div",{staticClass:"empty"},[r("h3",[e._v("请在左侧选择一个仓库库位")])])])},staticRenderFns:[]}},iYtc:function(e,t){},p5yg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("4YfN"),a=r.n(o),s=r("I8tE"),l={name:"CreateMore",data:function(){return{isVisible:!1,orgForm:{storageTitleBegin:"",storageTitleEnd:"",storageColumn:"",storageFloors:"",length:"",width:""},orgFormRules:{storageTitleBegin:[{required:!0,message:"请填写内容",trigger:"blur"}],storageColumn:[{required:!0,message:"请填写内容",trigger:"blur"}],storageFloors:[{required:!0,message:"请填写内容",trigger:"blur"}]}}},props:{show:{type:Boolean,required:!0,default:!1},selectedId:{type:String,required:!0}},mounted:function(){},methods:{cancel:function(){this.isVisible=!1,this.resetData(),this.$refs.orgForm.resetFields()},save:function(){var e=this;this.$refs.orgForm.validate(function(t){var r=a()({},e.orgForm,{wareHouseUuid:e.selectedId});t&&Object(s.a)(r).then(function(t){t.error||(e.$message({message:"生成成功!",type:"success"}),e.$emit("updateTree"),e.cancel())})})},reset:function(){this.resetData(),this.$refs.orgForm.resetFields()},resetData:function(){this.orgForm={}}},watch:{show:function(e){this.isVisible=e}}},i=r("tvjc"),n=r.n(i);var c=function(e){r("1wbY")},d=r("C7Lr")(l,n.a,!1,c,"data-v-7bd998b6",null);t.default=d.exports},tvjc:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{width:"600px",title:"多库位生成",visible:e.isVisible},on:{"update:visible":function(t){e.isVisible=t},close:e.cancel}},[r("div",{staticClass:"org-form"},[r("el-form",{ref:"orgForm",attrs:{inline:!0,model:e.orgForm,rules:e.orgFormRules,"label-width":"180px"}},[r("el-row",[r("el-col",{attrs:{span:18}},[r("el-row",[r("el-col",[r("el-form-item",{attrs:{label:"库位",prop:"storageTitleBegin"}},[r("el-input",{staticStyle:{width:"65px"},attrs:{clearable:""},model:{value:e.orgForm.storageTitleBegin,callback:function(t){e.$set(e.orgForm,"storageTitleBegin",t)},expression:"orgForm.storageTitleBegin"}})],1),e._v(" "),r("span",{staticClass:"mid-text"},[e._v("到")]),e._v(" "),r("el-form-item",[r("el-input",{staticStyle:{width:"65px"},attrs:{span:3},model:{value:e.orgForm.storageTitleEnd,callback:function(t){e.$set(e.orgForm,"storageTitleEnd",t)},expression:"orgForm.storageTitleEnd"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",[r("el-form-item",{attrs:{label:"列数",prop:"storageColumn"}},[r("el-input",{staticStyle:{width:"65px"},model:{value:e.orgForm.storageColumn,callback:function(t){e.$set(e.orgForm,"storageColumn",t)},expression:"orgForm.storageColumn"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",[r("el-form-item",{attrs:{label:"层数",prop:"storageFloors"}},[r("el-input",{staticStyle:{width:"65px"},model:{value:e.orgForm.storageFloors,callback:function(t){e.$set(e.orgForm,"storageFloors",t)},expression:"orgForm.storageFloors"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",[r("el-form-item",{attrs:{label:"每个库位长"}},[r("el-input",{staticStyle:{width:"65px"},model:{value:e.orgForm.length,callback:function(t){e.$set(e.orgForm,"length",t)},expression:"orgForm.length"}})],1),e._v(" "),r("span",{staticClass:"mid-text"},[e._v("米，宽")]),e._v(" "),r("el-form-item",[r("el-input",{staticStyle:{width:"65px"},model:{value:e.orgForm.width,callback:function(t){e.$set(e.orgForm,"width",t)},expression:"orgForm.width"}})],1),e._v(" "),r("span",{staticClass:"mid-text"},[e._v("米")])],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-row",[r("el-button",{staticClass:"mar-t-30",attrs:{type:"primary"},on:{click:e.save}},[e._v("生成")])],1),e._v(" "),r("el-row",[r("el-button",{staticClass:"mar-t-30",on:{click:e.reset}},[e._v("重置")])],1)],1)],1)],1)],1)])},staticRenderFns:[]}},"u/UE":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-contextmenu",{ref:"treeMenu"},[r("v-contextmenu-item",{on:{click:e.createShelve}},[e._v("新增")]),e._v(" "),r("v-contextmenu-item",{on:{click:e.editShelve}},[e._v("编辑")]),e._v(" "),r("v-contextmenu-item",{on:{click:e.deleteShelve}},[e._v("删除")]),e._v(" "),r("v-contextmenu-item",{on:{click:e.createMore}},[e._v("多库位生成")])],1),e._v(" "),r("el-tree",{ref:"tree",attrs:{data:e.shelveTreeData,"node-key":"id",props:e.defaultProps,"default-expand-all":"","expand-on-click-node":!1,"render-content":e.customRender},on:{"node-contextmenu":e.showContextMenu,"node-click":e.handleNodeClick}})],1)},staticRenderFns:[]}},zDJI:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("HzJ8"),a=r.n(o),s=r("0+j4"),l=r("aIe1"),i=r("Jky9"),n={name:"ShelvesDetail",data:function(){return{showTable:!1,selectRow:[],tableData:[],leafNode:[]}},props:{nodeData:{type:Object,required:!0},isInit:{type:Boolean}},watch:{nodeData:{handler:function(e){this.getDetail()},deep:!0}},methods:{refresh:function(e){this.getDetail()},initDetail:function(){this.orgNodeData=null},getDetail:function(){this.nodeData&&(this.leafNode=[],this.getLeafNode(this.nodeData),this.showTable=!0)},getLeafNode:function(e){if(e.children.length){var t=!0,r=!1,o=void 0;try{for(var s,l=a()(e.children);!(t=(s=l.next()).done);t=!0){var i=s.value;this.getLeafNode(i)}}catch(e){r=!0,o=e}finally{try{!t&&l.return&&l.return()}finally{if(r)throw o}}}else this.leafNode.push(e)},isButtonIsDisabled:function(){return!!this.selectRow.length},handleAdd:function(){this.$emit("update:isCreate",!0),this.$emit("openDialog",{})},edit:function(){this.$emit("update:isCreate",!1),this.$emit("openDialog",[this.selectRow])},cancel:function(){var e=this;this.$confirm("确认删除选中的库位吗?","提示",{type:"warning"}).then(function(){var t={shelvesId:[]},r=!0,o=!1,s=void 0;try{for(var l,i=a()(e.selectRow);!(r=(l=i.next()).done);r=!0){var n=l.value;t.shelvesId.push(n.id)}}catch(e){o=!0,s=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw s}}e.$emit("deleteShelvesList",t)}).catch(function(){})}},components:{CommonWrapper:s.a,CommonTable:l.a,NavButton:i.a}},c=r("iJj/"),d=r.n(c);var u=function(e){r("5+l1")},m=r("C7Lr")(n,d.a,!1,u,"data-v-c2460526",null);t.default=m.exports}});
//# sourceMappingURL=5.00893c0252cab176f25c.js.map