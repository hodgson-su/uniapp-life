<template>
	<view class="tab-box">
		<view class="icon" @click="goBack">
			<img class="img-icon" src="../static/image/home_icon.png">
			<view class="text">首页</view>
		</view>
		<view class="buy-icon" @click="goBuy">
			<view class="buy-btn">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			goodsInfo:{
				default:()=>{}
			}
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
			},
			goBuy(){
				console.log(this.goodsInfo)
				let that = this
				let customJson = this.$store.state.customJson
				this.$post(this,{
					data:{
						type:'pdd.ddk.goods.promotion.url.generate',
						p_id:'10528582_141616990',
						goods_id_list:[that.goodsInfo.goods_id],
						search_id:that.goodsInfo.search_id,
						generate_we_app:true,
						custom_parameters:JSON.stringify(customJson)
					},
					success(data){
						let result = data.goods_promotion_url_generate_response.goods_promotion_url_list[0]
						that.navigateToDo(result.we_app_info.app_id,result.we_app_info.page_path)
					}
				})
				
			},
			navigateToDo(app_id,path){
				wx.navigateToMiniProgram({
				  appId: app_id,
				  path: path,
				  success(res) {
					// 打开成功
					console.log("打开成功")
				  }
				})
			}
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
	overflow: hidden;
}
.icon{
	flex:1;
	text-align: center;
}
.icon .img-icon{
	width:22px;
	height:21px;
}
.icon .text{
	color: #333;
	font-size: 15px;
	font-weight: bold;
}
.buy-icon{
	flex:1;
	margin-top: 2px;
	text-align: right;
}
.buy-btn{
	display: inline-block;
	margin-right: 38px;
	width:125px;
	height:40px;
	line-height: 40px;
	text-align: center;
	color: #fff;
	font-size: 17px;
	background:linear-gradient(90deg,rgba(255,153,86,1) 0%,rgba(255,101,54,1) 100%);
	border-radius:20px;
}
</style>
