webpackJsonp([41],{"6q/e":function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=s("woOf"),o=s.n(l),t=s("uTPb"),u=s("bJK+"),a={name:"UserEdit",data:function(){return{isVisible:!1,orgnization:[],userForm:{userAccount:"",userPassword:"",userRealName:"",userGender:"1",userOrgUuid:"",userEnable:"1",userTelephone:"",userMobile:""},formRules:{userAccount:[{required:!0,message:"请输入账号",trigger:"blur"},{validator:t.a.account,trigger:"blur"}],userRealName:[{required:!0,message:"请输入姓名",trigger:"blur"}],userPassword:[{required:!0,message:"请输入密码",trigger:"blur"}],userOrgId:[{required:!0,message:"请选择机构",trigger:"blur"}],userMobile:[{validator:t.a.cellPhone,trigger:"blur"}]}}},props:{show:{type:Boolean,default:!1},org:{type:Array,required:!0}},watch:{show:function(e){this.isVisible=e}},methods:{save:function(){var e=this;this.$refs.userForm.validate(function(r){if(r){var s=o()({},e.userForm);Object(u.a)(s).then(function(r){r.error||(e.$message({message:"添加用户成功!",type:"success"}),e.cancel(),e.$emit("updateList"))})}})},cancel:function(){this.$refs.userForm.resetFields(),this.$emit("update:show",!1),this.isVisible=!1}}},i=s("i6xJ"),n=s.n(i),c=s("VU/8")(a,n.a,!1,null,null,null);r.default=c.exports},i6xJ:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("el-dialog",{attrs:{width:"600px",title:"新建用户",visible:e.isVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(r){e.isVisible=r},close:e.cancel}},[s("el-form",{ref:"userForm",attrs:{inline:!0,model:e.userForm,rules:e.formRules,"label-width":"80px"}},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"账号",prop:"userAccount"}},[s("el-input",{model:{value:e.userForm.userAccount,callback:function(r){e.$set(e.userForm,"userAccount",r)},expression:"userForm.userAccount"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"密码",prop:"userPassword"}},[s("el-input",{attrs:{type:"password"},model:{value:e.userForm.userPassword,callback:function(r){e.$set(e.userForm,"userPassword",r)},expression:"userForm.userPassword"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"姓名",prop:"userRealName"}},[s("el-input",{model:{value:e.userForm.userRealName,callback:function(r){e.$set(e.userForm,"userRealName",r)},expression:"userForm.userRealName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"性别",prop:"userGender"}},[s("el-radio-group",{model:{value:e.userForm.userGender,callback:function(r){e.$set(e.userForm,"userGender",r)},expression:"userForm.userGender"}},[s("el-radio",{attrs:{label:"1"}},[e._v("男")]),e._v(" "),s("el-radio",{attrs:{label:"0"}},[e._v("女")])],1)],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"机构",prop:"userOrgUuid"}},[s("el-select",{staticStyle:{width:"178px"},model:{value:e.userForm.userOrgUuid,callback:function(r){e.$set(e.userForm,"userOrgUuid",r)},expression:"userForm.userOrgUuid"}},e._l(e.org,function(e,r){return s("el-option",{key:r,attrs:{label:e.orgName,value:e.orgUuid}})}))],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"状态",prop:"userEnable"}},[s("el-radio-group",{model:{value:e.userForm.userEnable,callback:function(r){e.$set(e.userForm,"userEnable",r)},expression:"userForm.userEnable"}},[s("el-radio",{attrs:{label:"1"}},[e._v("启用")]),e._v(" "),s("el-radio",{attrs:{label:"0"}},[e._v("禁用")])],1)],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"座机",prop:"userTelephone"}},[s("el-input",{model:{value:e.userForm.userTelephone,callback:function(r){e.$set(e.userForm,"userTelephone",r)},expression:"userForm.userTelephone"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"手机",prop:"userMobile"}},[s("el-input",{model:{value:e.userForm.userMobile,callback:function(r){e.$set(e.userForm,"userMobile",r)},expression:"userForm.userMobile"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:6,offset:18}},[s("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=41.6f10ef2a6f0889a2c025.js.map