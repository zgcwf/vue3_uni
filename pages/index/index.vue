<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'hello, world'
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

<style>
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
</style>