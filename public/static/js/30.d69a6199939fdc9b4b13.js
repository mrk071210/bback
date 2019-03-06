webpackJsonp([30],{jXHh:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("woOf"),a=t.n(s),r=(t("uTPb"),t("mx14")),c={dicName:"",dicUuid:"",dicNumber:"",dicPid:"",dicPname:""},o={name:"DicUpdate",data:function(){return{showDetailMode:!0,isVisible:!1,isFormDisabled:!1,dicForm:a()({},c),dicFormRules:{dicName:[{required:!0,message:"请填写字典中文名称",trigger:"change"},{max:30,message:"最大长度为30字符",trigger:"change"}],dicNumber:[{required:!0,message:"请填写字典编号",trigger:"change"},{max:30,message:"最大长度为30字符",trigger:"change"}]}}},props:{show:{type:Boolean,required:!0,default:!1},nodeData:{type:Object,required:!0},isCreate:{type:Boolean,required:!0}},mounted:function(){},watch:{show:function(e){e&&(this.isCreate?this.setToCreateState():this.setToEditState()),this.isVisible=e}},methods:{setToCreateState:function(){this.nodeData?(this.dicForm=a()({},c),this.dicForm.dicPname=this.nodeData.name,this.dicForm.dicPid=this.nodeData.id):(this.$message({message:"未找到父节点,无法在此情况下创建组织结构.",type:"error"}),this.isFormDisabled=!0)},setToEditState:function(){var e=this,i={dicUuid:this.nodeData.id};Object(r.j)(i).then(function(i){e.dicForm=a()({},i)})},save:function(){var e=this;this.$refs.dicForm.validate(function(i){if(i){var t=e.isCreate?r.a:r.w,s=e.isCreate?"新建":"修改";t(e.dicForm).then(function(i){i.error||(e.$message({message:s+"成功!",type:"success"}),e.$emit("updateTree"),e.cancel())})}})},cancel:function(){this.isVisible=!1,this.$emit("update:show",!1),this.dicForm=a()({},c),this.$refs.dicForm.resetFields()}}},d=t("wDmU"),n=t.n(d);var l=function(e){t("qR9s")},m=t("VU/8")(o,n.a,!1,l,"data-v-55d9263f",null);i.default=m.exports},qR9s:function(e,i){},wDmU:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-dialog",{attrs:{width:"400px",title:(e.isCreate?"新建":"编辑")+"字典管理",visible:e.isVisible},on:{"update:visible":function(i){e.isVisible=i},close:e.cancel}},[t("div",{staticClass:"org-form"},[t("el-form",{ref:"dicForm",attrs:{inline:!0,model:e.dicForm,rules:e.dicFormRules,disabled:e.isFormDisabled,"label-width":"120px"}},[t("el-row",[e.isCreate?e._e():t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"字典ID",prop:"dicUuid"}},[t("el-input",{attrs:{disabled:""},model:{value:e.dicForm.dicUuid,callback:function(i){e.$set(e.dicForm,"dicUuid",i)},expression:"dicForm.dicUuid"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"字典编码",prop:"dicNumber"}},[t("el-input",{model:{value:e.dicForm.dicNumber,callback:function(i){e.$set(e.dicForm,"dicNumber",i)},expression:"dicForm.dicNumber"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"字典中文名称",prop:"dicName"}},[t("el-input",{model:{value:e.dicForm.dicName,callback:function(i){e.$set(e.dicForm,"dicName",i)},expression:"dicForm.dicName"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"父节点",prop:"dicPname"}},[t("el-input",{attrs:{readonly:!0},model:{value:e.dicForm.dicPname,callback:function(i){e.$set(e.dicForm,"dicPname",i)},expression:"dicForm.dicPname"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{staticClass:"flex-right",attrs:{span:24}},[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),t("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=30.d69a6199939fdc9b4b13.js.map