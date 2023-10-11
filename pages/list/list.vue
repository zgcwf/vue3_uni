<template>
	<view>
		<my-button style="margin: 20px;" type="primary" @btn-click='btnClick'>
			My Button
		</my-button>
		<my-button-setup style="margin: 20px;" @btn-click='btnClick'>
			My Button
		</my-button-setup>
	</view>
</template>

<script setup>
	const btnClick = (data) => {
		console.log('My Button', data);
	}
</script>

<style>

</style>