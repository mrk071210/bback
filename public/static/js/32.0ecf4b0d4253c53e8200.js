webpackJsonp([32],{"9TvD":function(r,s){r.exports={render:function(){var r=this,s=r.$createElement,o=r._self._c||s;return o("div",{staticClass:"main"},[o("section",[o("h4",[r._v("修改密码")]),r._v(" "),o("el-form",{ref:"passwordForm",attrs:{model:r.passwordForm,rules:r.passwordRules,"label-width":"85px"}},[o("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[o("el-input",{attrs:{type:"password"},model:{value:r.passwordForm.oldPassword,callback:function(s){r.$set(r.passwordForm,"oldPassword",s)},expression:"passwordForm.oldPassword"}})],1),r._v(" "),o("el-form-item",{staticClass:"mar-t-35",attrs:{label:"新密码",prop:"password"}},[o("el-input",{attrs:{type:"password"},model:{value:r.passwordForm.password,callback:function(s){r.$set(r.passwordForm,"password",s)},expression:"passwordForm.password"}})],1),r._v(" "),o("el-form-item",{staticClass:"mar-t-35",attrs:{label:"确认新密码",prop:"rePassword"}},[o("el-input",{attrs:{type:"password"},model:{value:r.passwordForm.rePassword,callback:function(s){r.$set(r.passwordForm,"rePassword",s)},expression:"passwordForm.rePassword"}})],1),r._v(" "),o("el-form-item",[o("el-button",{on:{click:r.cancel}},[r._v("返 回")]),r._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:r.confirm}},[r._v("确 定")])],1)],1)],1)])},staticRenderFns:[]}},BowR:function(r,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o("gJB1"),e=o("uTPb"),t={name:"ModifyPassword",data:function(){var r=this;return{passwordForm:{oldPassword:"",password:"",rePassword:""},passwordRules:{oldPassword:[{validator:function(r,s,o){""===s?o(new Error("请输入旧密码")):o()},trigger:"blur"}],password:[{min:6,message:"密码最小长度6位",trigger:"blur"},{max:18,message:"密码最大长度18位",trigger:"change"},{validator:e.a.simplePassword,trigger:"blur"}],rePassword:[{validator:function(s,o,a){""===o?a(new Error("请输入确认密码")):o!==r.passwordForm.password?a(new Error("两次输入密码不一致")):a()},trigger:"blur"}]}}},methods:{confirm:function(){var r=this;this.$refs.passwordForm.validate(function(s){if(s){var o={userId:r.$store.getters.userId,oldUserPassword:r.passwordForm.oldPassword,userPassword:r.passwordForm.password};Object(a.c)(o).then(function(s){s.error?r.$refs.passwordForm.resetFields():r.$alert("密码修改成功! 点击确认后重新登录.","修改密码",{confirmButtonText:"确定",callback:function(s){r.$store.dispatch("userLogout").then(function(){r.$router.push("/login")})}})})}})},cancel:function(){this.$refs.passwordForm.resetFields(),location.reload()}}},d=o("9TvD"),l=o.n(d);var n=function(r){o("IpaI")},i=o("VU/8")(t,l.a,!1,n,"data-v-41b44b7c",null);s.default=i.exports},IpaI:function(r,s){}});
//# sourceMappingURL=32.0ecf4b0d4253c53e8200.js.map