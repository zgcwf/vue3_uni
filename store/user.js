import {
	defineStore
} from 'pinia'

import request from '@/service/index.js'

// user：唯一
export const useUserStore = defineStore('user', {
	state: () => ({
		name: "zgc",
		age: 18,
		level: 8,
		counter: 0,
		banners: [],
		recommends: [],
	}),

	actions: {
		// 1. 基本使用(传参)
		increment(num) {
			this.age += num;
		},

		decrease() {
			this.counter--
		},

		// 2. 网络请求
		async fetchUserData() {
			// 方法1： 外界取不到数据
			// uni.request({
			//     url: 'http://123.207.32.32:8000/home/multidata',
			//     success: (res) => {
			//        console.log("data", res.data.data);
			// 				this.banners = res.data.data.banner.list
			// 				this.recommends = res.data.data.recommend.list
			//     }
			// });
			// 方法2： 外界能拿到数据
			// return new Promise((resolve, reject) => {
			// 	uni.request({
			// 		url: 'http://123.207.32.32:8000/home/multidata',
			// 		success: (res) => {
			// 			console.log("data", res.data.data);
			// 			this.banners = res.data.data.banner.list
			// 			this.recommends = res.data.data.recommend.list
			// 			resolve(res.data.data)
			// 		},
			// 		fail: (err) => {
			// 			reject(err)
			// 		}
			// 	});
			// })
			// 方法3： 使用封装好的请求，外界能拿到数据
			const res = await request.service('/home/multidata')
			console.log('res', res);
			this.banners = res.banner.list
			this.recommends = res.recommend.list
			return res
		},
	},
})