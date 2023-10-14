<template>
	<view class="list-container">
		<my-button style="margin: 20px;" type="primary" @btn-click='btnClick'>
			My Button
		</my-button>
		<my-button-setup style="margin: 20px;" @btn-click='btnClick'>
			My Button
		</my-button-setup>
		<button @click="addCounter"> +1 -- {{userStore.counter}} </button>
		<button @click="subCounter"> -1 -- {{userStore.counter}} </button>
		<!-- 轮播图 -->
		<list-banner :banners='banners' @click='gotoWebview' />
	</view>
</template>

<script setup>
	import {
		storeToRefs
	} from "pinia";

	import {
		onLoad
	} from '@dcloudio/uni-app'

	import {
		useUserStore
	} from '@/store/user.js'

	import ListBanner from './components/list-banner.vue'

	const btnClick = (data) => {
		console.log('My Button', data);
	}

	const userStore = useUserStore()
	// 直接操作数据
	const addCounter = () => userStore.counter++
	// 调用方法间接操作数据
	const subCounter = () => userStore.decrease()

	// 获取接口数据
	onLoad(() => {
		const getData = userStore.fetchUserData().then((data) => {
			console.log('data', data);
		})
	})

	// 解构(使用storeToRefs保持解构出来的数据依然具有响应式)
	const {
		banners,
		recommends
	} = storeToRefs(userStore);

	const gotoWebview = (link) => {
		uni.navigateTo({
			url: `/pages/webview/webview?link=${link}`
		})
	}
</script>

<style>
	.list-container {
		overflow: hidden;
	}
</style>