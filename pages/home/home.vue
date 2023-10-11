<template>
	<view>
		<button type="primary" plain="true" @click="gotoTest">跳转test</button>
		<button type="primary" plain="true" @click="gotoIndex">跳转index</button>
		<button type="primary" plain="true" @click="gotoList">跳转list</button>
	</view>
</template>

<script>
	/* 生命周期 */
	let _this1;
	let _this2;
	export default {
		// 1. 页面的声明周期
		// 页面生命周期中的 this 与组件生命周期中的 this 是同一个 this
		onLoad() {
			console.log('Home onLoad');
			_this1 = this
		},
		onShow() {
			console.log('Home onShow');
		},
		onReady() {
			console.log('Home onReady', _this1 === _this2); // true
		},
		onHide() {
			console.log('Home onHide');
		},
		onUnload() {
			console.log('Home onUnload');
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log('Home onPullDownRefresh');
		},
		// 页面滚动到底部
		onReachBottom() {
			console.log('Home onReachBottom');
		},

		// 2. 组件的生命周期
		beforeCreate() {
			console.log('Home beforeCreate');
		},
		created() {
			_this2 = this
		},

		methods: {
			gotoTest() {
				uni.navigateTo({
					url: '/pages/test/test',
				})
			},
			gotoIndex() {
				uni.navigateTo({
					url: '/pages/index/index',
				})
			},
			gotoList() {
				uni.navigateTo({
					url: '/pages/list/list',
				})
			},
		}
	}
</script>

<style>

</style>