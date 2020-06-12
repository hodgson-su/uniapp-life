<template>
	<view class="mask" @click="closeLogin">
		<view class="login-box" @click.stop="">
			
			<view class="embellish"></view>
			<view class="title">登陆</view>
			<view class="msg">请登陆后进行操作</view>
			<view class="btn-box">
				<view class="flex left" @click="closeLogin">暂不登录</view>
				<view class="flex">
					<button class="item"
						open-type="getUserInfo"
						@getuserinfo="getuserinfo"
						:withCredentials="true"
						:plain="true"
					>
							<view>立即登陆</view>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that
	export default {
		data() {
			return {
				
			};
		},
		onLoad(){
			that = this
		},
		methods:{
			closeLogin(){
				this.$store.commit('setShowLogin',false)
			},
			getuserinfo: function (e) {
			  console.log('getuserinfo')
			  this.wxLogin()
			},
			wxLogin(){
				let that = this
				uni.showLoading({
					title:''
				})
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes)
					that.$post(that,{
					  url:'getMiniToken',
					  data:{'code':loginRes.code},
					  success(data){
						// that.userValue(data)
							let miniToken = data.miniToken
							uni.getUserInfo({
						      provider: 'wxLogin',
						      success: function (infoRes) {
						        console.log(infoRes);
								that.$post(that,{
								  url:'wxLogin',
								  data:{
									  'type':2,
									  'encryptedData':infoRes.encryptedData,
									  'iv':infoRes.iv,
									  'miniToken':miniToken
								   },
								  success(data){
									  console.log(data)
									  uni.setStorage({
									      key: 'token',
									      data: data.token,
									      success: function () {
									          that.loginSuccess(data)
									      }
									  })
									  
									// that.userValue(data)
								  },
								  error(res){
									// alert('error'+JSON.stringify(res))
								  }
								})
						      }
						    });
					  },
					  error(res){
						// alert('error'+JSON.stringify(res))
					  }
					})
				  }
				});
			},
			loginSuccess(data){
				this.$store.commit('setUserData',data)
				this.$store.commit('setLogin',true)
				this.$store.commit('setShowLogin',false)
			}
		}
	}
</script>

<style scoped>
.mask{
	position:fixed;
	width:100%;
	height: 100%;
	top: 0;
	background: rgba(0,0,0,0.4);
	z-index: 9999;
}
.login-box{
	position: relative;
	width:260px;
	border-radius:10px;
	margin:46% auto;
	background: #fff;
}
.login-box .embellish{
	position: absolute;
	width: 80px;
	height: 75px;
	background-size: 100%  100%;
	top: -6px;
	right: 15px;
}
.login-box .title{
	position: relative;
	font-size: 20px;
	color: #fff;
	padding: 16px;
}
.login-box .msg{
	padding:90px 0 50px 0;
	font-size: 12px;
	color: #999;
	text-align: center;
}
.login-box .btn-box{
	display: flex;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 15px;
	border-top: 1px solid #D5D5D5;
}
.login-box .flex{
	flex:1;
	color: #FF9E05;
}
.login-box .left{
	color: #5A5A5A;
	border-right: 1px solid #D5D5D5;
}
uni-button{
	border: none;
	height: 50px;
	line-height: 50px;
	font-size: 15px;
	color: #FF9E05;
}
.login-box .item{
	border: none;
	height: 50px;
	line-height: 50px;
	font-size: 15px;
	color: #FF9E05;
}
</style>
