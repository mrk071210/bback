webpackJsonp([65],{FpoJ:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("wppO"),a=o.n(i),l=o("Jky9"),n=o("0+j4"),r=o("aIe1"),s=(o("fBur"),o("I8tE")),c={name:"CustomerQuery",components:{VuePerfectScrollbar:a.a,NavButton:l.a,CommonWrapper:n.a,CommonTable:r.a},props:{queryInfo:{type:Object},show:{type:Boolean,default:!1}},data:function(){return{isVisible:!1,tableData:[],isListLoading:!1}},watch:{show:function(t){this.isVisible=t,t&&this.getDetail()}},mounted:function(){},methods:{getDetail:function(){var t=this;this.isListLoading=!0,Object(s.i)({id:this.queryInfo.id}).then(function(e){e.error||(t.tableData=e,t.isListLoading=!1)})},formatDate:function(t,e){if(t[e.property])return moment(t[e.property]).format("YYYY-MM-DD")},cancel:function(){this.$emit("update:show",!1),this.$emit("update:queryInfo",null),this.$emit("updateList"),this.isVisible=!1}}},p=o("so2h"),u=o.n(p);var d=function(t){o("OJED")},f=o("C7Lr")(c,u.a,!1,d,"data-v-860df842",null);e.default=f.exports},OJED:function(t,e){},so2h:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{width:"800px",title:"小件出库明细",visible:t.isVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":!0,"lock-scroll":!0,center:""},on:{"update:visible":function(e){t.isVisible=e},close:t.cancel}},[o("div",[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],ref:"userTable",attrs:{height:"100%",stripe:"",border:!0,"tooltip-effect":"light",data:t.tableData}},[o("el-table-column",{attrs:{prop:"deliverOrderUuid",label:"出库单号","min-width":"180"}}),t._v(" "),o("el-table-column",{attrs:{prop:"exportTime",label:"出库时间",formatter:t.formatDate,"min-width":"120",sortable:""}}),t._v(" "),o("el-table-column",{attrs:{prop:"productDeliverCount",label:"出库数量","min-width":"120"}}),t._v(" "),o("el-table-column",{attrs:{prop:"pickUserName",label:"拣货人","min-width":"120","show-overflow-tooltip":!0}}),t._v(" "),o("el-table-column",{attrs:{prop:"deliverUserName",label:"发货人","min-width":"120","show-overflow-tooltip":!0}})],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=65.8f36ab753481efaaf3fe.js.map