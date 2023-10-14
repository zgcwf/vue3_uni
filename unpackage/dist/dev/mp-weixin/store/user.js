"use strict";
const common_vendor = require("../common/vendor.js");
const service_index = require("../service/index.js");
const useUserStore = common_vendor.defineStore("user", {
  state: () => ({
    name: "zgc",
    age: 18,
    level: 8,
    counter: 0,
    banners: [],
    recommends: []
  }),
  actions: {
    // 1. 基本使用(传参)
    increment(num) {
      this.age += num;
    },
    decrease() {
      this.counter--;
    },
    // 2. 网络请求
    async fetchUserData() {
      const res = await service_index.request.service("/home/multidata");
      console.log("res", res);
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;
      return res;
    }
  }
});
exports.useUserStore = useUserStore;
