"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
}
const _sfc_main = {
  // 只能在App.vue里监听应用的生命周期
  // https://zh.uniapp.dcloud.io/collocation/App.html
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  // 1. 全局数据globalData
  // https://zh.uniapp.dcloud.io/collocation/App.html#globaldata
  globalData: {
    name: "zgc",
    age: 18
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
