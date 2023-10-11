<template>
	<view>
		<view :class="['my-btn', type]" @click="hanleBtnClick">
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted
	} from 'vue'

	import {
		onLoad,
		onShow,
		onReady
	} from '@dcloudio/uni-app'

	const props = defineProps({
		type: {
			type: String,
			default: 'default' // default primary
		},
	})

	const emit = defineEmits(['btnClick'])

	const hanleBtnClick = () => {
		emit('btnClick', 'this is data setup')
	}

	// 组件的生命周期(执行)
	onMounted(() => {
		console.log('my-btn-setup onMounted');
	})

	// compositions Api 支持页面的生命周期(部分执行)
	// 不同平台执行的页面生命周期不一定相同

	// 执行
	onLoad(() => {
		console.log('my-btn-setup onLoad');
	})
	// 执行
	onShow(() => {
		console.log('my-btn-setup onShow');
	})
	// 在App H5没有执行，weapp有执行
	onReady(() => {
		console.log('my-btn-setup onReady');
	})
</script>

<style lang="scss">
	.my-btn {
		text-align: center;
		width: 100%;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		border-radius: 5px;
	}

	.default {
		color: $uni-text-color;
		background-color: $uni-bg-color-grey;
	}

	.primary {
		color: $uni-text-color-inverse;
		background-color: $uni-color-primary;
	}
</style>