<template>
	<view>
		<button type="primary" plain="true" @click="gotoTest">跳转test</button>
		<button type="primary" plain="true" @click="gotoIndex">跳转index</button>
	</view>
</template>

<script>
	/* 生命周期 */
	export default {
		// 1. 页面的声明周期
		onLoad() {
			console.log('Home onLoad');
		},
		onShow() {
			console.log('Home onShow');
		},
		onReady() {
			console.log('Home onReady');
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
		}
	}
</script>

<style>

</style>