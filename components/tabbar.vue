<template>
	<view class="tab-box">
		<view class="nav" 
		v-for="(item,index) in tabList" 
		:key="item.id" 
		:class="{'active':active==index}"
		@click="changetabBar(index)"
		>
			<view class="icon">
				<text class="iconfont">{{getIcon(item.icon)}}</text>
			</view>
			<view class="text">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			active:{
				default:1
			},
			tabList:{
				type:[Object,Array],
				default:()=>[{},{},{}]
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			getIcon(icon){
				var dataJSON = '{"icon": "'+ icon +'"}';
				// 使用JSON工具转换
				var objJSON = JSON.parse(dataJSON);
				var unicode = objJSON["icon"];
				return unicode
			},
			changetabBar(index){
				this.$emit('changetabBar',index)
			}
		},
		computed:{
			// tabList(){
			// 	return this.$store.state.tabList
			// }
		}
	}
</script>

<style scoped>
.tab-box{
	display: flex;
	width:100%;
	height: 45px;
	border-top: 1px solid #D6D7DC;
	background-color: #fff;
	padding-top: 2px;
	padding-bottom: 0;
	padding-bottom: constant(safe-area-inset-bottom);  
	padding-bottom: env(safe-area-inset-bottom); 
}
.tab-box .nav{
	flex:1;
	text-align: center;
}
.tab-box .nav .icon{
	display: inline-block;
}
.tab-box .nav .icon .iconfont{
	color: #969896;
	font-size: 20px;
}
.tab-box .nav .text{
	font-size: 14px;
	line-height: 14px;
	color: #999;
	margin-top: 2px;
}
.tab-box .nav.active .iconfont{
	color: #FFBB4E!important;
}
.tab-box .nav.active .text{
	color: #FFBB4E!important;
}
</style>
