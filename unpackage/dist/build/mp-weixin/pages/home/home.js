"use strict";const o=require("../../common/vendor.js");let e,n;const t={onLoad(){console.log("Home onLoad"),e=this},onShow(){console.log("Home onShow")},onReady(){console.log("Home onReady",e===n)},onHide(){console.log("Home onHide")},onUnload(){console.log("Home onUnload")},onPullDownRefresh(){console.log("Home onPullDownRefresh")},onReachBottom(){console.log("Home onReachBottom")},beforeCreate(){console.log("Home beforeCreate")},created(){n=this},methods:{gotoTest(){o.index.navigateTo({url:"/pages/test/test"})},gotoIndex(){o.index.navigateTo({url:"/pages/index/index"})},gotoList(){o.index.navigateTo({url:"/pages/list/list"})}}};const s=o._export_sfc(t,[["render",function(e,n,t,s,l,g){return{a:o.o(((...o)=>g.gotoTest&&g.gotoTest(...o))),b:o.o(((...o)=>g.gotoIndex&&g.gotoIndex(...o))),c:o.o(((...o)=>g.gotoList&&g.gotoList(...o)))}}]]);wx.createPage(s);
