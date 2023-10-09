<script>
	export default {
		// 只能在App.vue里监听应用的生命周期
		// https://zh.uniapp.dcloud.io/collocation/App.html
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

		// 1. 全局数据globalData
		// https://zh.uniapp.dcloud.io/collocation/App.html#globaldata
		globalData: {
			name: 'zgc',
			age: 18
		}
	}
</script>

<!-- 不需要写 scoped 属性，app文件内是公共样式，每个页面/组件内带是自己的私有样式 -->
<style lang="scss">
	/*每个页面公共css */
	 @import '@/common/css/common.scss';
</style>