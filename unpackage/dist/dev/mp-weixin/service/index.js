"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 60 * 1e3 * 2;
const BASE_URL = "http://123.207.32.32:8000";
const request = {};
request.service = (url, method, data) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + url,
      method: method || "GET",
      timeout: TIME_OUT,
      data,
      success: (res) => {
        resolve(res.data.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
request.get = (url, params) => {
  return request.service(url, "GET", params);
};
request.post = (url, params) => {
  return request.service(url, "POST", params);
};
exports.request = request;
