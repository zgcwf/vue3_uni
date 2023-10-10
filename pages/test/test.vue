<template>
	<view>
		<view v-for="(item,index) in 20" :key="index" class="area">
			{{index}}
		</view>
	</view>
</template>

<script setup>
	// composition Api
	import {
		onMounted,
		onBeforeMount
	} from "vue";

	import {
		onLoad,
		onShow,
		onReady,
		onHide,
		onUnload,
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'

	// 1. 页面的声明周期
	onLoad(() => {
		console.log('Test onLoad');
	})

	onShow(() => {
		console.log('Test onShow');
	})

	onReady(() => {
		console.log('Test onReady');
	})

	onHide(() => {
		console.log('Test onHide');
	})

	onUnload(() => {
		console.log('Test onUnload');
	})

	onPullDownRefresh(() => {
		console.log('Test onPullDownRefresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	})

	onReachBottom(() => {
		console.log('Test onReachBottom');
	})

	// 2. 组件的生命周期
	onBeforeMount(() => {
		console.log('onBeforeMount');
	})
	onMounted(() => {
		console.log('onMounted');
	})
</script>

<style>
	.area {
		width: 750rpx;
		height: 100px;
		border-bottom: 1px solid red;
	}
</style>