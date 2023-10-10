<template>
	<button type="primary" @click="goBackIndex1">返回首页</button>
	<button type="primary" @click="goBackIndex2">返回首页</button>
</template>

<script>
	export default {
		onLoad(option) {
			//1. 打印出上个页面url中传递的参数
			console.log(option.id, option.name);

			const eventChannel = this.getOpenerEventChannel();
			//2. 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', (data) => {
				console.log(data)
			})

			// 3. 向上一页面传递数据，一进入当前页面就执行，上一页面立即取得数据
			eventChannel.emit('acceptDataFromOpenedPage', {
				data: 'acceptDataFromOpenedPage data'
			});
			eventChannel.emit('someEvent', {
				data: 'someEvent data'
			});
		},

		methods: {
			goBackIndex1() {
				uni.navigateBack({
					delta: 1
				});
				// 向上一页面传递数据，当点击返回按钮回退时，上一页面时才得到数据
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit('acceptUserPageData', {
					res: '将user页面的数据传递给Index页面'
				})
			},

			// 使用全局事件总线传递数据
			// 注意事件总线需要先监听在触发，比如你再A界面触发，然后跳转到B界面监听是不行的
			// 通常 on 与 off 是同时使用的
			goBackIndex2() {
				uni.navigateBack({
					delta: 1
				});
				// 触发事件总线
				uni.$emit('updateData', {
					msg: '页面更新'
				})
			},

		}
	}
</script>

<style>
</style>