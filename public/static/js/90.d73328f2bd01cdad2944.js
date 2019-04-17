webpackJsonp([90],{TuSL:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",[o("el-dialog",{attrs:{width:"500px",title:(e.isCreate?"新增":"编辑")+"仓库",visible:e.isVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(s){e.isVisible=s},close:e.cancel}},[o("el-form",{ref:"warehouseInfo",staticClass:"text-c",attrs:{inline:"",model:e.warehouseInfo,rules:e.formRules,"label-width":"80px"}},[o("el-row",[o("el-col",[o("el-form-item",{attrs:{label:"名称",prop:"warehouseName"}},[o("el-input",{staticClass:"w160",attrs:{maxlength:"30",placeholder:""},model:{value:e.warehouseInfo.warehouseName,callback:function(s){e.$set(e.warehouseInfo,"warehouseName",s)},expression:"warehouseInfo.warehouseName"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",[o("el-form-item",{attrs:{label:"所属地区",prop:"warehouseArea"}},[o("el-input",{staticClass:"w160",attrs:{maxlength:"50",placeholder:""},model:{value:e.warehouseInfo.warehouseArea,callback:function(s){e.$set(e.warehouseInfo,"warehouseArea",s)},expression:"warehouseInfo.warehouseArea"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",[o("el-form-item",{attrs:{label:"所属机构",prop:"warehouseOrgUuid"}},[o("el-cascader",{staticClass:"w160",attrs:{options:e.options,"change-on-select":""},model:{value:e.warehouseInfo.warehouseOrgUuidList,callback:function(s){e.$set(e.warehouseInfo,"warehouseOrgUuidList",s)},expression:"warehouseInfo.warehouseOrgUuidList"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{staticClass:"pos-r"},[o("el-form-item",{attrs:{label:"详细地址",prop:"warehouseAddress"}},[o("el-input",{ref:"address",staticClass:"w160",attrs:{disabled:!e.warehouseInfo.warehouseAddress,type:"textarea",autosize:{maxRows:7},maxlength:"200",resize:"none",placeholder:"请输入仓库详细地址，最长200字符"},model:{value:e.warehouseInfo.warehouseAddress,callback:function(s){e.$set(e.warehouseInfo,"warehouseAddress",s)},expression:"warehouseInfo.warehouseAddress"}}),e._v(" "),o("i",{staticClass:"el-icon-location pos-a posButton",on:{click:function(s){return e.chooseAddress(e.warehouseInfo)}}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",[o("el-form-item",{attrs:{label:"描述",prop:"warehouseDesc"}},[o("el-input",{staticClass:"w160",attrs:{type:"textarea",autosize:{maxRows:7},maxlength:"200",resize:"none",placeholder:"请输入描述,最长200字符"},model:{value:e.warehouseInfo.warehouseDesc,callback:function(s){e.$set(e.warehouseInfo,"warehouseDesc",s)},expression:"warehouseInfo.warehouseDesc"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",[o("el-button",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("提交")])],1)],1)],1)],1),e._v(" "),o("g-map",{attrs:{show:e.isMapShow,addressInfo:e.addressInfo},on:{"update:show":function(s){e.isMapShow=s},getAddress:e.getAddress}})],1)},staticRenderFns:[]}},"h+R9":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=o("aA9S"),a=o.n(r),t=o("I8tE"),i=o("XQ4b"),u=o("Yqxs"),n={name:"WarehouseCreate",data:function(){return{warehouseInfo:{warehouseName:"",warehouseArea:"",warehouseOrgUuid:"",warehouseAddress:"",warehouseDesc:"",warehouseLat:"",warehouseOrgUuidList:[]},isVisible:!1,formRules:{warehouseName:[{required:!0,message:"请输入仓库名称",trigger:"blur"}],warehouseArea:[{required:!0,message:"请输入仓库区域",trigger:"blur"}],warehouseAddress:[{required:!0,message:"请选择详细地址",trigger:"blur"}],warehouseOrgUuidList:[{required:!0,message:"请选择仓库所属机构",trigger:"blur"}],warehouseDesc:[{min:0,max:2e3,message:"描述长度请不要超过2000字",trigger:"change"}]},isMapShow:!1,addressInfo:{},options:[]}},props:{show:{type:Boolean,default:!1},org:{type:Array,required:!0},orgList:{type:Array,required:!0},nodeData:{type:Object,required:!0},isCreate:{type:Boolean,required:!0}},watch:{show:function(e){e&&(this.isCreate||this.setToEditState()),this.isVisible=e},org:function(e){this.options=e}},methods:{setToEditState:function(){this.warehouseInfo=a()({},this.warehouseInfo,this.nodeData),this.findPid(this.warehouseInfo.warehouseOrgUuid)},chooseAddress:function(e){this.isMapShow=!0,this.addressInfo={lat:e.warehouseLat||null,lng:e.warehouseLng||null,address:e.warehouseAddress}},getAddress:function(e,s,o){this.warehouseInfo.warehouseLat=e,this.warehouseInfo.warehouseLng=s,this.warehouseInfo.warehouseAddress=o,this.$refs.address.$el.children[0].focus(),this.$refs.address.$el.children[0].blur(),console.log(this.warehouseInfo)},save:function(){var e=this;this.$refs.warehouseInfo.validate(function(s){s&&(e.warehouseInfo.warehouseOrgUuid=e.warehouseInfo.warehouseOrgUuidList[e.warehouseInfo.warehouseOrgUuidList.length-1],Object(t.H)(e.warehouseInfo).then(function(s){s.error||e.$message({message:(e.isCreate?"新增":"修改")+"成功！",type:"success"}),u.a.dispatch("getWarehouseList"),e.cancel(),e.$emit("updateTree")}))})},cancel:function(){this.warehouseInfo={warehouseName:"",warehouseArea:"",warehouseOrgUuid:"",warehouseAddress:"",warehouseDesc:"",warehouseLat:"",warehouseOrgUuidList:[]},this.$refs.warehouseInfo.resetFields(),this.$emit("update:show",!1),this.isVisible=!1},findPid:function(e){var s=this.orgList.find(function(s){return s.id==e});s&&this.warehouseInfo.warehouseOrgUuidList.unshift(s.id),""==s.pId||s.root||this.findPid(s.pId)}},components:{GMap:i.default}},h=o("TuSL"),l=o.n(h);var d=function(e){o("opga")},w=o("C7Lr")(n,l.a,!1,d,"data-v-46948a45",null);s.default=w.exports},opga:function(e,s){}});
//# sourceMappingURL=90.d73328f2bd01cdad2944.js.map