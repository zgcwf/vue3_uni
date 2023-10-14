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
    common_vendor.index.$on("updateData", this.emitLog);
  },
  onUnload() {
    common_vendor.index.$off("updateData", this.emitLog);
  },
  // 声明方法
  methods: {
    emitLog(data) {
      console.log("监听到事件是来自 user 页面的 updateData 事件 ，携带参数 msg 为：" + data.msg);
    },
    gotoUser() {
      common_vendor.index.navigateTo({
        url: "/pages/user/user?id=1&name=zgc",
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptUserPageData1: function(data) {
            console.log(data);
          },
          acceptUserPageData2(data) {
            console.log(data);
          }
        },
        success: function(res) {
          res.eventChannel.emit("acceptDataFromOpenerPage", {
            obj: {
              id: "001"
            },
            str: "我是从index页面传递过来的数据"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.gotoUser && $options.gotoUser(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
