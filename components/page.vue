<template>
	<view class="page main-content">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		components:{
			
		},
		computed:{
			
		}
	}
</script>

<style scoped>
.page{
	padding-top:var(--status-bar-height);
}
.main-content{
	position:absolute;
	width:100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
}
</style>
