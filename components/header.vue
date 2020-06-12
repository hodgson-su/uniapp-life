<template>
	<view class="header">
		<view class="icon" v-if="page=='home'">
			<!-- #ifdef MP-WEIXIN -->
			<navigator open-type="exit" target="miniProgram">
				<text class="iconfont">&#xe668;</text>
			</navigator>
			<!-- #endif -->
		</view>
		<view class="icon" @click="goBack" v-else>
			<text class="iconfont">&#xe668;</text>
		</view>
		<view class="middle">{{title}}</view>
		<view class="icon"></view>
	</view>
</template>

<script>
	export default {
		props:{
			page:'',
			title:''
		},
		data() {
			return {
				
			};
		},
		methods:{
			goBack(){
				uni.navigateBack({
				  delta: 1
				});
			}
		}
	}
</script>

<style scoped>
.header{
	display: flex;
	padding: 20px 15px 10px 15px;
}
.header .icon{
	flex:1;
	color: #777777;
}
.header .middle{
	flex:2;
	font-size: 21px;
	color: #F6854C;
	text-align: center;
}

</style>
