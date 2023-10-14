"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-button",
  props: {
    type: {
      type: String,
      default: "default"
      // default primary
    }
  },
  emit: ["btnClick"],
  data() {
    return {};
  },
  methods: {
    hanleBtnClick() {
      this.$emit("btnClick", "this is data");
    }
  },
  // 支持组件的生命周期，但不支持页面的生命周期(在options Api中)
  beforeCreate() {
    console.log("my-btn beforeCreate", this);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.type),
    b: common_vendor.o((...args) => $options.hanleBtnClick && $options.hanleBtnClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/components/my-button/my-button.vue"]]);
wx.createComponent(Component);
