<template>
	<view class="search">
		<input class="uni-input" confirm-type="search"
		 placeholder="搜索商品/标题/关键字" 
		 v-model="value"/>
		<span class="icon" @click="search">
			<text class="iconfont">&#xe677;</text>
		</span>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:''
			}
		},
		methods: {
			search(){
				
			}
		},
		watch:{
			value(){
				this.$emit('search',this.value)
			}
		}
	}
</script>

<style scoped>
.search{
	margin:13px 57px;
	height: 30px;
	line-height: 30px;
	background:rgba(255,117,48,0.08);
	border-radius:15px;
	display: flex;
}
.search .uni-input{
	flex:1;
	height: 100%;
	margin-left: 20px;
}
.search .icon{
	width:60px;
	text-align: center;
}
.search .iconfont{
	font-size: 20px;
	color: #A8A19E;
}
</style>
