webpackJsonp([120],{"+by5":function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s("Q+Ik"),o=s.n(t),l=s("HzJ8"),u=s.n(l),i=s("aA9S"),a=s.n(i),n=s("KH7x"),c=s.n(n),d=s("IYkF"),m=s.n(d),p=s("uTPb"),f=s("bJK+"),b={name:"UserEdit",data:function(){return{isVisible:!1,orgnization:[],userForm:{userAccount:"",userRealName:"",userGender:"1",userOrgUuid:"",userOrgUuidList:[],userEnable:"1",userTelephone:"",userMobile:"",userUuid:""},formRules:{userAccount:[{required:!0,message:"请输入账号",trigger:"blur"},{validator:p.a.account,trigger:"blur"}],userRealName:[{required:!0,message:"请输入姓名",trigger:"blur"}],userOrgId:[{required:!0,message:"请选择机构",trigger:"blur"}],userMobile:[{validator:p.a.cellPhone,trigger:"blur"}],userTelephone:[{validator:p.a.isTelephone,trigger:"blur"}]},options:[]}},props:{show:{type:Boolean,default:!1},org:{type:Array,required:!0},orgList:{type:Array,required:!0},modifyUser:{type:Object}},watch:{show:function(e){this.isVisible=e},org:function(e){this.options=e},modifyUser:function(e){if(e){var r=m()(null),s=!0,t=!1,l=void 0;try{for(var i,n=u()(o()(e));!(s=(i=n.next()).done);s=!0){var d=i.value,p=c()(d,2),f=p[0],b=p[1];void 0!==this.userForm[f]&&(r[f]=b)}}catch(e){t=!0,l=e}finally{try{!s&&n.return&&n.return()}finally{if(t)throw l}}this.userForm.userUuid=e.userUuid,this.userForm=a()({},this.userForm,r),this.userForm.userOrgUuidList=[],this.findPid(this.userForm.userOrgUuid),console.log(this.userForm.userOrgUuidList)}}},methods:{save:function(){var e=this;this.$refs.userForm.validate(function(r){if(r){var s=a()({},e.userForm);s.userOrgUuid=s.userOrgUuidList[s.userOrgUuidList.length-1],console.log(e.options,s.userOrgUuid),Object(f.f)(s).then(function(r){r.error||(e.$message({message:"修改用户成功!",type:"success"}),e.cancel(),e.$emit("updateList"))})}})},cancel:function(){this.$refs.userForm.resetFields(),this.$emit("update:show",!1),this.$emit("update:modifyUser",null),this.isVisible=!1},findPid:function(e){var r=this.orgList.find(function(r){return r.id==e});r&&this.userForm.userOrgUuidList.unshift(r.id),""==r.pId||r.root||this.findPid(r.pId)}}},g=s("XbT3"),h=s.n(g),v=s("C7Lr")(b,h.a,!1,null,null,null);r.default=v.exports},XbT3:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("el-dialog",{attrs:{width:"600px",title:"编辑用户",visible:e.isVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(r){e.isVisible=r},close:e.cancel}},[s("el-form",{ref:"userForm",attrs:{inline:!0,model:e.userForm,rules:e.formRules,"label-width":"80px"}},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"账号",prop:"userAccount"}},[s("el-input",{attrs:{maxlength:"50"},model:{value:e.userForm.userAccount,callback:function(r){e.$set(e.userForm,"userAccount",r)},expression:"userForm.userAccount"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"姓名",prop:"userRealName"}},[s("el-input",{attrs:{maxlength:"50"},model:{value:e.userForm.userRealName,callback:function(r){e.$set(e.userForm,"userRealName",r)},expression:"userForm.userRealName"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"机构",prop:"userOrgUuid"}},[s("el-cascader",{staticStyle:{width:"178px"},attrs:{options:e.options,"change-on-select":""},model:{value:e.userForm.userOrgUuidList,callback:function(r){e.$set(e.userForm,"userOrgUuidList",r)},expression:"userForm.userOrgUuidList"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"性别",prop:"userGender"}},[s("el-radio-group",{model:{value:e.userForm.userGender,callback:function(r){e.$set(e.userForm,"userGender",r)},expression:"userForm.userGender"}},[s("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),s("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"座机",prop:"userTelephone"}},[s("el-input",{attrs:{placeholder:"座机:区号-号码"},model:{value:e.userForm.userTelephone,callback:function(r){e.$set(e.userForm,"userTelephone",r)},expression:"userForm.userTelephone"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"状态",prop:"userEnable"}},[s("el-radio-group",{model:{value:e.userForm.userEnable,callback:function(r){e.$set(e.userForm,"userEnable",r)},expression:"userForm.userEnable"}},[s("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),s("el-radio",{attrs:{label:0}},[e._v("禁用")])],1)],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"手机",prop:"userMobile"}},[s("el-input",{model:{value:e.userForm.userMobile,callback:function(r){e.$set(e.userForm,"userMobile",r)},expression:"userForm.userMobile"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:6,offset:18}},[s("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=120.9dcbd2a2ded730d4a112.js.map