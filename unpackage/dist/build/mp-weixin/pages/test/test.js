"use strict";const o=require("../../common/vendor.js"),e={__name:"test",setup:e=>(o.onLoad((()=>{console.log("Test onLoad")})),o.onShow((()=>{console.log("Test onShow")})),o.onReady((()=>{console.log("Test onReady")})),o.onHide((()=>{console.log("Test onHide")})),o.onUnload((()=>{console.log("Test onUnload")})),o.onPullDownRefresh((()=>{console.log("Test onPullDownRefresh"),setTimeout((function(){o.index.stopPullDownRefresh()}),1e3)})),o.onReachBottom((()=>{console.log("Test onReachBottom")})),o.onBeforeMount((()=>{console.log("onBeforeMount")})),o.onMounted((()=>{console.log("onMounted")})),(e,n)=>({a:o.f(20,((e,n,s)=>({a:o.t(n),b:n})))}))};wx.createPage(e);