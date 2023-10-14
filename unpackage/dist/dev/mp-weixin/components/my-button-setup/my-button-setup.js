"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my-button-setup",
  props: {
    type: {
      type: String,
      default: "default"
      // default primary
    }
  },
  emits: ["btnClick"],
  setup(__props, { emit }) {
    const hanleBtnClick = () => {
      emit("btnClick", "this is data setup");
    };
    common_vendor.onMounted(() => {
      console.log("my-btn-setup onMounted");
    });
    common_vendor.onLoad(() => {
      console.log("my-btn-setup onLoad");
    });
    common_vendor.onShow(() => {
      console.log("my-btn-setup onShow");
    });
    common_vendor.onReady(() => {
      console.log("my-btn-setup onReady");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(__props.type),
        b: common_vendor.o(hanleBtnClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/components/my-button-setup/my-button-setup.vue"]]);
wx.createComponent(Component);
