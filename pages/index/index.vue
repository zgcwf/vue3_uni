<template>
	<view class="content">
		<image class="logo" src="@/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<scroll-view scroll-y="true" class="scroll-Y" :show-scrollbar="false">
			<view class="scroll-Y-1">A</view>
			<view class="scroll-Y-2">B</view>
			<view class="scroll-Y-3">C</view>
		</scroll-view>
		<scroll-view scroll-x="true" class="scroll-X" :show-scrollbar="false">
			<view class="scroll-X-1">D</view>
			<view class="scroll-X-2">E</view>
			<view class="scroll-X-3">F</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello, World'
			}
		},
		// 页面的生命周期
		onLoad() {
			console.log('onLoad', this) // this是当前Vue实例
			// 1. 拿到全局的数据
			const app = getApp() // 支持多个平台 weapp h5 app
			console.log('globalData', app.globalData.name)
			// 可以修改，修改之后其他文件内的数据会跟着一起变动
			app.globalData.name = 'test'
			console.log('globalData', app.globalData.name)

			// 2. 拿到当前页面路由
			// 用于获取当前页面栈的实例，以数组形式按栈的顺序给出，数组中的元素为页面实例，第一个元素为首页，最后一个元素为当前页面
			const pages = getCurrentPages()
			console.log(pages[pages.length - 1].route)
		},

		// Vue组件的声明周期
		beforeCreate() {},
		created() {},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.scroll-Y {
		height: 300px;
		// 隐藏滚动条(编写全局样式)
		:global(.scroll-Y .uni-scroll-view::-webkit-scrollbar) {
			display: none;
			width: 0;
			height: 0;
			color: transparent;
		}

		.scroll-Y-1 {
			height: 200px;
			background-color: red;
		}

		.scroll-Y-2 {
			height: 200px;
			background-color: blue;
		}

		.scroll-Y-3 {
			height: 200px;
			background-color: green;
		}
	}

	.scroll-X {
		height: 300px;
		width: 750rpx;
		white-space: nowrap;
		// 隐藏滚动条
		::-webkit-scrollbar {
			display: none;
			width: 0;
			height: 0;
			color: transparent;
		}

		.scroll-X-1 {
			display: inline-block;
			width: 600rpx;
			height: 200px;
			background-color: red;
		}

		.scroll-X-2 {
			display: inline-block;
			width: 600rpx;
			height: 200px;
			background-color: blue;
		}

		.scroll-X-3 {
			display: inline-block;
			width: 600rpx;
			height: 200px;
			background-color: green;
		}
	}
</style>