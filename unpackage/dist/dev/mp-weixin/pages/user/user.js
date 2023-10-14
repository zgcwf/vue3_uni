"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad(option) {
    console.log(option.id, option.name);
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFromOpenerPage", (data) => {
      console.log(data);
    });
    eventChannel.emit("acceptUserPageData1", {
      data: "acceptUserPageData1 data"
    });
  },
  methods: {
    goBackIndex1() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.emit("acceptUserPageData2", {
        res: "acceptUserPageData2 data"
      });
    },
    // 使用全局事件总线传递数据
    // 注意事件总线需要先监听在触发，比如你再A界面触发，然后跳转到B界面监听是不行的
    // 通常 on 与 off 是同时使用的
    goBackIndex2() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      common_vendor.index.$emit("updateData", {
        msg: "将user页面的数据传递给Index页面"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBackIndex1 && $options.goBackIndex1(...args)),
    b: common_vendor.o((...args) => $options.goBackIndex2 && $options.goBackIndex2(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
