"use strict";
const common_vendor = require("../../common/vendor.js");
let _this1;
let _this2;
const _sfc_main = {
  // 1. 页面的声明周期
  // 页面生命周期中的 this 与组件生命周期中的 this 是同一个 this
  onLoad() {
    console.log("Home onLoad");
    _this1 = this;
  },
  onShow() {
    console.log("Home onShow");
  },
  onReady() {
    console.log("Home onReady", _this1 === _this2);
  },
  onHide() {
    console.log("Home onHide");
  },
  onUnload() {
    console.log("Home onUnload");
  },
  // 下拉刷新
  onPullDownRefresh() {
    console.log("Home onPullDownRefresh");
  },
  // 页面滚动到底部
  onReachBottom() {
    console.log("Home onReachBottom");
  },
  // 2. 组件的生命周期
  beforeCreate() {
    console.log("Home beforeCreate");
  },
  created() {
    _this2 = this;
  },
  methods: {
    gotoTest() {
      common_vendor.index.navigateTo({
        url: "/pages/test/test"
      });
    },
    gotoIndex() {
      common_vendor.index.navigateTo({
        url: "/pages/index/index"
      });
    },
    gotoList() {
      common_vendor.index.navigateTo({
        url: "/pages/list/list"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.gotoTest && $options.gotoTest(...args)),
    b: common_vendor.o((...args) => $options.gotoIndex && $options.gotoIndex(...args)),
    c: common_vendor.o((...args) => $options.gotoList && $options.gotoList(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
