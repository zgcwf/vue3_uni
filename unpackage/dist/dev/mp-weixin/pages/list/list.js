"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_my_button2 = common_vendor.resolveComponent("my-button");
  const _easycom_my_button_setup2 = common_vendor.resolveComponent("my-button-setup");
  (_easycom_my_button2 + _easycom_my_button_setup2)();
}
const _easycom_my_button = () => "../../components/my-button/my-button.js";
const _easycom_my_button_setup = () => "../../components/my-button-setup/my-button-setup.js";
if (!Math) {
  (_easycom_my_button + _easycom_my_button_setup + ListBanner)();
}
const ListBanner = () => "./components/list-banner.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const btnClick = (data) => {
      console.log("My Button", data);
    };
    const userStore = store_user.useUserStore();
    const addCounter = () => userStore.counter++;
    const subCounter = () => userStore.decrease();
    common_vendor.onLoad(() => {
      userStore.fetchUserData().then((data) => {
        console.log("data", data);
      });
    });
    const {
      banners,
      recommends
    } = common_vendor.storeToRefs(userStore);
    const gotoWebview = (link) => {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?link=${link}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(btnClick),
        b: common_vendor.p({
          type: "primary"
        }),
        c: common_vendor.o(btnClick),
        d: common_vendor.t(common_vendor.unref(userStore).counter),
        e: common_vendor.o(addCounter),
        f: common_vendor.t(common_vendor.unref(userStore).counter),
        g: common_vendor.o(subCounter),
        h: common_vendor.o(gotoWebview),
        i: common_vendor.p({
          banners: common_vendor.unref(banners)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/dell/Desktop/学习代码/vue3_uni/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
