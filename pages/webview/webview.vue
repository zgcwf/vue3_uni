<template>
	<web-view :src="link"></web-view>
</template>

<script setup>
	// 可以通过props取到页面传递过来的附带在url上的参数
	const props = defineProps({
		link: {
			type: String,
			default: ''
		}
	})
	// import {
	// 	onLoad
	// } from '@dcloudio/uni-app'
	// onLoad((options) => {
	// 	console.log();
	// })
</script>

<style lang="scss">

</style>