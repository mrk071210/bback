webpackJsonp([84],{D7oy:function(e,t){},F7c4:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{width:"600px",visible:e.isVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,title:"提示",center:""},on:{"update:visible":function(t){e.isVisible=t},close:e.cancel}},[a("el-alert",{attrs:{title:e.title,type:"warning",closable:!1}}),e._v(" "),a("br"),e._v(" "),a("el-form",{ref:"maintenanceForm",attrs:{model:e.maintenanceForm,rules:e.formRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"维修报告",prop:"goodTestRemark"}},[a("el-input",{attrs:{placeholder:"请输入维修报告,最长200字符",autosize:{maxRows:3},type:"textarea",maxlength:"200"},model:{value:e.maintenanceForm.goodTestRemark,callback:function(t){e.$set(e.maintenanceForm,"goodTestRemark",t)},expression:"maintenanceForm.goodTestRemark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.save}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取消")])],1)],1)},staticRenderFns:[]}},FNPw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("HzJ8"),s=a.n(o),r=(a("uTPb"),a("I8tE")),i={name:"mainForm",data:function(){return{isVisible:!1,maintenanceForm:{goodRepairStatus:"",goodRepairs:[],goodTestRemark:""},formRules:{}}},props:{flag:{type:String},show:{type:Boolean,default:!1},modifyUser:{type:Array},searchParams:{type:Object}},computed:{title:function(){return"此操作将修改维修状态为"+this.flag+"!"}},watch:{show:function(e){this.isVisible=e}},methods:{save:function(){var e=this;this.$refs.maintenanceForm.validate(function(t){if(t){var a={goodRepairStatus:"已修复"===e.flag?"1":"未修复"===e.flag?"2":"",goodRepairs:[],goodTestRemark:e.maintenanceForm.goodTestRemark},o=!0,i=!1,n=void 0;try{for(var l,c=s()(e.modifyUser);!(o=(l=c.next()).done);o=!0){var m=l.value;a.goodRepairs.push(m.goodRepairUuid)}}catch(e){i=!0,n=e}finally{try{!o&&c.return&&c.return()}finally{if(i)throw n}}Object(r.r)(a).then(function(t){t.error||(e.$message({message:"维修状态设置成功",type:"success"}),e.$refs.maintenanceForm.resetFields(),e.$emit("updateList",e.searchParams),e.$emit("update:show",!1),e.isVisible=!1)})}})},cancel:function(){this.$refs.maintenanceForm.resetFields(),this.$emit("update:show",!1),this.isVisible=!1}}},n=a("F7c4"),l=a.n(n);var c=function(e){a("D7oy")},m=a("C7Lr")(i,l.a,!1,c,"data-v-544e71c9",null);t.default=m.exports}});
//# sourceMappingURL=84.5517aa87da0effb59a94.js.map