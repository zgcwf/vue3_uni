"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "test",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("Test onLoad");
    });
    common_vendor.onShow(() => {
      console.log("Test onShow");
    });
    common_vendor.onReady(() => {
      console.log("Test onReady");
    });
    common_vendor.onHide(() => {
      console.log("Test onHide");
    });
    common_vendor.onUnload(() => {
      console.log("Test onUnload");
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("Test onPullDownRefresh");
      setTimeout(function() {
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
    });
    common_vendor.onReachBottom(() => {
      console.log("Test onReachBottom");
    });
    common_vendor.onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    common_vendor.onMounted(() => {
      console.log("onMounted");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(20, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/pages/test/test.vue"]]);
wx.createPage(MiniProgramPage);
