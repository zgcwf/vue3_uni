"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "list-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const handleClick = (item) => {
      console.log(item);
      emit("click", item.link);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, index, i0) => {
          return {
            a: item.image,
            b: index,
            c: common_vendor.o(($event) => handleClick(item), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/pages/list/components/list-banner.vue"]]);
wx.createComponent(Component);
