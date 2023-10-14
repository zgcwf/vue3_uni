"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/index/index.js";
  "./pages/user/user.js";
  "./pages/test/test.js";
  "./pages/list/list.js";
  "./pages/detail/detail.js";
  "./pages/webview/webview.js";
}
const _sfc_main = {
  // 只能在App.vue里监听 -- 应用的生命周期
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
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
