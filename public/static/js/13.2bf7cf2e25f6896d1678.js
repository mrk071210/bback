webpackJsonp([13,87,108,110],{"2I1F":function(e,t){},"7uLI":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),o=a.n(r),s=a("wppO"),n=a.n(s),l=a("l4G/"),i=a("NSvg"),c=a("aLZv"),u=a("QPLA"),d=a("I8tE"),h=(a("4+6g"),a("fBur"),{name:"GoodsManage",mixins:[a("dF+P").a],data:function(){return{flexHeight:(document.documentElement.clientHeight-240>200?document.documentElement.clientHeight-240:200)+"px",searchParams:{},shelvesTreeData:[],expandNodes:[],clickedNodeData:{},selectedId:""}},methods:{handleNodeClick:function(e){var t=e.data;e.node,e.nodeCom;this.clickedNodeData=t,this.selectedId=t.id,t.pId?this.searchParams=o()(this.searchParams,{storageUuid:this.selectedId}):delete this.searchParams.storageUuid,this.$refs.goodsDetail.queryList(this.searchParams)},search:function(e){this.searchParams=o()(e,{storageUuid:this.selectedId}),this.$refs.goodsDetail.queryList(this.searchParams)},updateTree:function(e){var t=this;this.selectedId="",this.searchParams=e,this.expandNodes=[],this.clickedNodeData={},this.searchParams=o()({warehouseUuid:e}),this.$refs.goodsDetail.queryList(this.searchParams),Object(d.k)({storageWarehouseUuid:e}).then(function(e){t.shelvesTreeData=Object(u.a)(e),e.forEach(function(e){""===e.pId&&t.expandNodes.push(e.id)})})}},components:{VuePerfectScrollbar:n.a,Search:l.default,Tree:i.default,GoodsDetail:c.default}}),m=a("C/ja"),p=a.n(m);var f=function(e){a("2I1F")},b=a("C7Lr")(h,p.a,!1,f,"data-v-107991ed",null);t.default=b.exports},"C/ja":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods"},[a("search",{on:{updateTree:e.updateTree,search:e.search}}),e._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"left-tree"},[a("VuePerfectScrollbar",{staticClass:"scroll-area",style:{height:e.flexHeight}},[a("tree",{ref:"tree",attrs:{expandNodes:e.expandNodes,clickedNodeData:e.clickedNodeData,shelvesTreeData:e.shelvesTreeData,searchData:e.searchParams},on:{nodeClick:e.handleNodeClick}})],1)],1),e._v(" "),a("div",{staticClass:"goods-content"},[a("goods-detail",{ref:"goodsDetail",attrs:{selectedId:e.selectedId,searchData:e.searchParams}})],1)])],1)},staticRenderFns:[]}},NSvg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("4YfN"),o=a.n(r),s=a("R4Sj"),n=a("TVaK"),l=(a("QPLA"),{name:"Tree",data:function(){return{defaultProps:{label:"name"}}},props:{clickedNodeData:{type:Object},shelvesTreeData:{type:Array},searchData:{type:Object},expandNodes:{type:Array}},watch:{},computed:o()({},Object(s.b)(["systemTheme"]),{selectedNode:function(){return this.clickedNodeData},systemColor:function(){return n.a[this.systemTheme]}}),methods:{handleNodeClick:function(e,t,a){this.$emit("nodeClick",{data:e,node:t,nodeCom:a})},customRender:function(e,t){var a=t.node,r=t.data,o=(t.store,this.$createElement);return o("span",{class:"custom-tree-node"},[o("span",[a.label]),this.$refs.tree.getCurrentNode()&&r.id===this.$refs.tree.getCurrentNode().id&&o("span",{class:"active",style:{backgroundColor:this.systemColor}})])},blurNode:function(){this.$refs.tree.setCurrentNode({})}}}),i=a("tgS/"),c=a.n(i);var u=function(e){a("OmOo")},d=a("C7Lr")(l,c.a,!1,u,"data-v-1ea30634",null);t.default=d.exports},OmOo:function(e,t){},SeLb:function(e,t){},aLZv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("4YfN"),o=a.n(r),s=a("ryJa"),n=a.n(s),l=a("0+j4"),i=a("aIe1"),c=a("Jky9"),u=a("QbCM"),d=a("rXHn"),h=(a("fBur"),a("I8tE")),m={name:"GoodsDetail",data:function(){return{tableData:[],showTable:!1,selectRow:[],searchParams:{},isListLoading:!1,pagination:{pageNum:1,pageSize:15,total:0},isMoveFormVisible:!1,qrCodeVisible:!1}},props:{searchData:{type:Object},selectedId:{type:String}},watch:{},methods:{queryList:function(e){var t=this.searchParams=e;this.getGoods(o()({},t,{pageNum:this.pagination.pageNum,pageSize:this.pagination.pageSize}))},changePage:function(e){this.pagination.pageNum=e,this.queryList(this.searchParams)},indexMethod:function(e){return e+1+(this.pagination.pageNum-1)*this.pagination.pageSize},getGoods:function(e){var t=this;this.isListLoading=!0,Object(h.h)(e).then(function(a){if(0==a.item.length&&a.pageNum>1)return t.pagination.pageNum=1,e.pageNum=1,void t.getGoods(e);t.tableData=a.item,t.pagination.total=a.total,t.pagination.pageNum=a.pageNum,t.pagination.pageSize=a.pageSize,t.isListLoading=!1,t.showTable=!0})},receiveQualityFormat:function(e){if(null!=e.receiveQualityStatus)switch(e.receiveQualityStatus){case 0:return"待质检";case 1:return"质检通过";case 2:return"质检不通过";default:return"未知"}},sendQualityFormat:function(e){if(null!=e.sendQualityStatus)switch(e.sendQualityStatus){case 0:return"待质检";case 1:return"质检通过";case 2:return"质检不通过";default:return"未知"}},typeFormat:function(e){if(e.productType)switch(e.productType){case"0":return"小件";case"1":return"套件";case"2":return"单品";default:return"未知"}},formatDate:function(e){if(e.upgroundDate)return n()(e.upgroundDate).utcOffset(8).format("YYYY-MM-DD HH:mm:ss")},statusFormat:function(e){if(null!=e.productStatus)switch(e.productStatus){case 1:return"待收货";case 2:return"已收货";case 3:return"已质检";case 4:return"库内存储";case 5:return"待质检";case 6:return"预出库";case 7:return"已备货";case 8:return"已发货";case 9:return"待发货";case 10:return"待维修";case 11:return"待下架";default:return"未知"}},isButtonDisabled:function(){return!!this.selectRow.length},qrCodePrint:function(){this.qrCodeVisible=!0},moveShelve:function(){this.isMoveFormVisible=!0},exportExcel:function(){var e=this.searchParams;Object(h.p)(e).then(function(e){var t=e.data,a=new Blob([t],{type:"application/ms-excel"}),r="物件列表"+n()(new Date).format("YYYYMMDD")+".xls";if("download"in document.createElement("a")){var o=document.createElement("a");o.download=r,o.style.display="none",o.href=URL.createObjectURL(a),document.body.appendChild(o),o.click(),URL.revokeObjectURL(o.href),document.body.removeChild(o)}else navigator.msSaveBlob(a,r)})},updateList:function(){this.queryList(this.searchParams)}},components:{CommonWrapper:l.a,CommonTable:i.a,NavButton:c.a,MoveShelve:u.default,QrCode:d.default}},p=a("iwTj"),f=a.n(p);var b=function(e){a("SeLb")},v=a("C7Lr")(m,f.a,!1,b,"data-v-50114db7",null);t.default=v.exports},cxzH:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("common-wrapper",{staticClass:"searchForm"},[a("el-form",{ref:"searchForm",attrs:{model:e.searchForm,"label-width":"50px"}},[a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"仓库",prop:"warehouseUuid"}},[a("el-select",{staticClass:"w100p",attrs:{placeholder:"选择仓库"},on:{change:e.warehouseChange},model:{value:e.searchForm.warehouseUuid,callback:function(t){e.$set(e.searchForm,"warehouseUuid",t)},expression:"searchForm.warehouseUuid"}},e._l(e.warehouseList,function(e,t){return a("el-option",{key:t,attrs:{label:e.warehouseName,value:e.warehouseUuid}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"商户",prop:"merchantUuid"}},[a("el-select",{staticClass:"w100p",attrs:{clearable:"",filterable:"",placeholder:"选择商户"},on:{change:e.merchantsChange},model:{value:e.searchForm.merchantUuid,callback:function(t){e.$set(e.searchForm,"merchantUuid",t)},expression:"searchForm.merchantUuid"}},e._l(e.merchantsList,function(e,t){return a("el-option",{key:t,attrs:{label:e.userName,value:e.userUuid}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"品牌",prop:"productBrand"}},[a("el-select",{staticClass:"w100p",attrs:{clearable:"",placeholder:"选择品牌",filterable:""},on:{change:e.brandChange},model:{value:e.searchForm.productBrand,callback:function(t){e.$set(e.searchForm,"productBrand",t)},expression:"searchForm.productBrand"}},e._l(e.brandList,function(t,r){return a("el-option",{key:r,attrs:{label:t,value:t}},[e._v(e._s(t)+"\n            ")])}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"货品名称",prop:"productName","label-width":"80px"}},[a("el-input",{attrs:{placeholder:"货品名称",clearable:""},model:{value:e.searchForm.productName,callback:function(t){e.$set(e.searchForm,"productName",t)},expression:"searchForm.productName"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"型号",prop:"productModelName"}},[a("el-select",{staticClass:"w100p",attrs:{clearable:"",placeholder:"选择型号",filterable:""},model:{value:e.searchForm.productModelName,callback:function(t){e.$set(e.searchForm,"productModelName",t)},expression:"searchForm.productModelName"}},e._l(e.modelList,function(t,r){return a("el-option",{key:r,attrs:{label:t,value:t}},[e._v(e._s(t)+"\n            ")])}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"类型",prop:"productType"}},[a("el-select",{staticClass:"w100p",attrs:{filterable:"",clearable:"",placeholder:"请选择货品类型"},model:{value:e.searchForm.productType,callback:function(t){e.$set(e.searchForm,"productType",t)},expression:"searchForm.productType"}},[a("el-option",{attrs:{label:"小件",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"套件",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"单品",value:"2"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"货品状态",prop:"productStatus","label-width":"80px"}},[a("el-select",{staticClass:"w100p",attrs:{filterable:"",clearable:"",placeholder:"选择状态"},model:{value:e.searchForm.productStatus,callback:function(t){e.$set(e.searchForm,"productStatus",t)},expression:"searchForm.productStatus"}},e._l(e.stateList,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),a("el-col",{staticClass:"flex-right",attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.search(t)}}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]}},iwTj:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods-detail"},[e.showTable?a("div",{staticClass:"content"},[a("nav-button",[a("el-button-group",[a("el-button",{attrs:{icon:"el-icon-menu",disabled:!e.isButtonDisabled()},on:{click:e.qrCodePrint}},[e._v("二维码打印")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-sort",disabled:!e.isButtonDisabled()},on:{click:e.moveShelve}},[e._v("移库")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-download"},on:{click:e.exportExcel}},[e._v("导出清单")])],1)],1),e._v(" "),a("common-table",{staticClass:"goods-table",attrs:{flex:240}},[a("template",{slot:"table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isListLoading,expression:"isListLoading"}],ref:"goodsTable",attrs:{height:"100%",stripe:"",border:!0,"tooltip-effect":"light",data:e.tableData},on:{"selection-change":function(t){return e.selectRow=t}}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",index:e.indexMethod,label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productMerchantName",label:"商户","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productBrand",label:"品牌","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productSeq",label:"条码","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productName",label:"货品名称","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productModel",label:"型号","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productItemName",label:"子件名","min-width":"140","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productType",label:"货品类型","min-width":"140",formatter:e.typeFormat}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productColor",label:"颜色","min-width":"140","show-tooltip-when-overflow":!0}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productStandard",label:"规格","min-width":"140","show-tooltip-when-overflow":!0}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"productId",label:"货品编号","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"storageName",label:"库位","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"upgroundDate",label:"上架时间","min-width":"150",formatter:e.formatDate}}),e._v(" "),a("el-table-column",{attrs:{prop:"productStatus",label:"货品状态",formatter:e.statusFormat}}),e._v(" "),a("el-table-column",{attrs:{prop:"receiveQualityStatus",label:"入库质检",formatter:e.receiveQualityFormat}}),e._v(" "),a("el-table-column",{attrs:{prop:"sendQualityStatus",label:"出库质检",formatter:e.sendQualityFormat}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":"140","show-overflow-tooltip":!0}})],1)],1),e._v(" "),a("template",{slot:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.pagination.pageNum,"page-size":e.pagination.pageSize,total:e.pagination.total},on:{"update:currentPage":function(t){return e.$set(e.pagination,"pageNum",t)},"update:current-page":function(t){return e.$set(e.pagination,"pageNum",t)},"current-change":e.changePage}})],1)],2)],1):a("div",{staticClass:"empty"},[a("h3",[e._v("请在左侧选择一个仓库库位")])]),e._v(" "),a("move-shelve",{attrs:{show:e.isMoveFormVisible,selectRow:e.selectRow},on:{"update:show":function(t){e.isMoveFormVisible=t},updateList:e.updateList}}),e._v(" "),a("qr-code",{attrs:{show:e.qrCodeVisible,tableData:e.selectRow},on:{"update:show":function(t){e.qrCodeVisible=t}}})],1)},staticRenderFns:[]}},"l4G/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),o=a.n(r),s=a("rVsN"),n=a.n(s),l=a("0+j4"),i=a("aIe1"),c=a("fBur"),u=a("4+6g"),d={name:"Search",data:function(){return{warehouseList:this.$store.getters.warehouseList,merchantsList:[],brandList:[],modelList:[],modelBrand:[],allModelList:[],searchForm:{warehouseUuid:"",merchantUuid:"",productBrand:"",productModelName:"",shelveName:"",remarks:"",goodsName:"",productType:"",productStatus:""},stateList:[{id:1,name:"待收货"},{id:2,name:"已收货"},{id:4,name:"库内存储"},{id:5,name:"待质检"},{id:6,name:"预出库"},{id:7,name:"已备货"},{id:8,name:"已发货"},{id:9,name:"待发货"},{id:10,name:"待维修"},{id:11,name:"待下架"}]}},props:{},mounted:function(){this.searchForm.warehouseUuid=Object(c.b)("warehouseUuid"),this.getMerchants(),this.getBrandModel({warehouseUuid:Object(c.b)("warehouseUuid")}),this.$emit("updateTree",this.searchForm.warehouseUuid),this.search()},methods:{getMerchants:function(){var e=this;return new n.a(function(t){var a={warehouseUuid:e.searchForm.warehouseUuid};Object(u.f)(a).then(function(a){a.error||(e.merchantsList=a,t())})})},getBrandModel:function(e){var t=this;Object(u.h)(e).then(function(e){e.error||(t.brandList=[],t.allModelList=[],t.modelList=[],e.forEach(function(e,a){t.brandList.push(e.productBrand),e.productModel.forEach(function(e){t.allModelList.push(e)})}),t.modelList=[].concat(t.allModelList),t.modelBrand=e)})},warehouseChange:function(e){var t=this;Object(c.e)("warehouseUuid",e),this.getMerchants().then(function(){t.searchForm.merchantUuid="",t.searchForm.productBrand="",t.searchForm.productModelName="",t.getBrandModel({warehouseUuid:t.searchForm.warehouseUuid}),t.$emit("updateTree",t.searchForm.warehouseUuid)})},merchantsChange:function(){this.searchForm.productBrand="",this.searchForm.productModelName="",this.getBrandModel({warehouseUuid:this.searchForm.warehouseUuid,merchantUuid:this.searchForm.merchantUuid})},brandChange:function(e){if(this.searchForm.productModelName="",""!==e){var t;t=this.modelBrand.find(function(t){return t.productBrand===e}),this.modelList=t.productModel}else this.modelList=[].concat(this.allModelList)},modelChange:function(){},search:function(){this.$emit("search",o()({},this.searchForm))},resetForm:function(e){this.$refs[e].resetFields(),this.searchForm.warehouseUuid=Object(c.b)("warehouseUuid"),this.$emit("rest",o()({},this.searchForm))}},components:{CommonWrapper:l.a,CommonTable:i.a}},h=a("cxzH"),m=a.n(h);var p=function(e){a("u73N")},f=a("C7Lr")(d,m.a,!1,p,"data-v-18673a08",null);t.default=f.exports},"tgS/":function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("el-tree",{ref:"tree",attrs:{data:this.shelvesTreeData,"node-key":"id",props:this.defaultProps,"default-expanded-keys":this.expandNodes,"expand-on-click-node":!1,"render-content":this.customRender},on:{"node-click":this.handleNodeClick}})},staticRenderFns:[]}},u73N:function(e,t){}});
//# sourceMappingURL=13.2bf7cf2e25f6896d1678.js.map