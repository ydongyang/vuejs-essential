webpackJsonp([1],{"3xpr":function(e,s){},j7e0:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1}},beforeRouteEnter:function(e,s,t){var n=s.name;t(function(e){if(e.$store.state.auth)switch(n){case"Register":e.showMsg("注册成功")}})},methods:{showMsg:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=e,this.msgType=s,this.msgShow=!0}}},o={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("Message",{attrs:{show:e.msgShow,type:e.msgType,msg:e.msg},on:{"update:show":function(s){e.msgShow=s}}})],1)},staticRenderFns:[]};var r=t("VU/8")(n,o,!1,function(e){t("3xpr")},"data-v-17b27e6e",null);s.default=r.exports}});
//# sourceMappingURL=1.593dfc72d312f7fa8d4d.js.map