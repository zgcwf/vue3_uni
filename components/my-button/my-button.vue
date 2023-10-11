<template>
	<view>
		<view :class="['my-btn', type]" @click="hanleBtnClick">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-button",
		props: {
			type: {
				type: String,
				default: 'default' // default primary
			},
		},
		emit: ['btnClick'],
		data() {
			return {

			};
		},
		methods: {
			hanleBtnClick() {
				this.$emit('btnClick', 'this is data')
			}
		},
		// 支持组件的生命周期，但不支持页面的生命周期(在options Api中)
		beforeCreate() {
			console.log('my-btn beforeCreate', this); // vue组件实例
		},
	}
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