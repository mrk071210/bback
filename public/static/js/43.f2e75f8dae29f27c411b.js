webpackJsonp([43],{Kuwa:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=s("OvRC"),t=s.n(r),l=s("woOf"),o=s.n(l),i=s("uTPb"),p=s("mx14"),m={spName:"",spCode:"",spValue:"",spRemark:""},n={name:"ParmasUpdate",data:function(){return{disableSpCode:"",isVisible:!1,paramsForm:o()({},m),formRules:{spName:[{required:!0,message:"请输入参数名称",trigger:"blur"},{validator:i.a.paramsOther,message:"50位以内任意字符",trigger:"blur"}],spCode:[{required:!0,message:"请输入参数编码",trigger:"blur"},{validator:i.a.paramsOther,message:"50位以内任意字符",trigger:"blur"}],spValue:[{required:!0,message:"请输入参数值",trigger:"blur"}]}}},props:{show:{type:Boolean,default:!1},paramsData:{type:Object},isCreate:{type:Boolean,required:!0}},watch:{show:function(e){e&&(this.isCreate?(this.disableSpCode=!1,this.paramsForm=o()({},m)):(this.disableSpCode=!0,this.paramsForm=o()({},this.paramsData))),this.isVisible=e}},methods:{save:function(){var e=this;this.$refs.paramsForm.validate(function(a){if(a){var s=o()({},e.paramsForm),r=e.isCreate?p.n:p.q,t=e.isCreate?"新增":"编辑";r(s).then(function(a){!0===a.error||(e.$message({message:t+"参数成功!",type:"success"}),e.cancel(),e.$emit("updateList"))})}})},cancel:function(){this.paramsForm=o()({},m),this.$refs.paramsForm.resetFields(),this.$emit("update:show",!1),this.$emit("update:paramsData",t()(null)),this.isVisible=!1}}},u=s("vWdg"),c=s.n(u),d=s("VU/8")(n,c.a,!1,null,null,null);a.default=d.exports},vWdg:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("el-dialog",{attrs:{width:"600px",title:(e.isCreate?"新增":"编辑")+"参数",visible:e.isVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(a){e.isVisible=a},close:e.cancel}},[s("el-form",{ref:"paramsForm",attrs:{model:e.paramsForm,rules:e.formRules,"label-width":"80px"}},[s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"参数名称",prop:"spName"}},[s("el-input",{model:{value:e.paramsForm.spName,callback:function(a){e.$set(e.paramsForm,"spName",a)},expression:"paramsForm.spName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"参数编码",prop:"spCode"}},[s("el-input",{attrs:{disabled:e.disableSpCode},model:{value:e.paramsForm.spCode,callback:function(a){e.$set(e.paramsForm,"spCode",a)},expression:"paramsForm.spCode"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"参数值",prop:"spValue"}},[s("el-input",{model:{value:e.paramsForm.spValue,callback:function(a){e.$set(e.paramsForm,"spValue",a)},expression:"paramsForm.spValue"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"备注",prop:"spRemark"}},[s("el-input",{model:{value:e.paramsForm.spRemark,callback:function(a){e.$set(e.paramsForm,"spRemark",a)},expression:"paramsForm.spRemark"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:6,offset:18}},[s("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=43.f2e75f8dae29f27c411b.js.map