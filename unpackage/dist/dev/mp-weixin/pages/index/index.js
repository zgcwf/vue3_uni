"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello, World"
    };
  },
  // 页面的生命周期
  onLoad() {
    console.log("onLoad", this);
    const app = getApp();
    console.log("globalData", app.globalData.name);
    app.globalData.name = "test";
    console.log("globalData", app.globalData.name);
    const pages = getCurrentPages();
    console.log(pages[pages.length - 1].route);
  },
  // Vue组件的声明周期
  beforeCreate() {
  },
  created() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
