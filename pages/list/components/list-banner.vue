<template>
	<view>
		<swiper class="list-swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item v-for="(item,index) in banners" :key="index" @click="handleClick(item)">
				<image class="img" :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})

	const emit = defineEmits(['click'])
	const handleClick = (item) => {
		console.log(item);
		emit('click', item.link)
	}
</script>

<style lang="scss">
	.list-swiper {
		width: 100%;

		.img {
			width: 100%;
		}
	}
</style>