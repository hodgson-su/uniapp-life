<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.getLocalStorage('habit_list').then((res)=>{
				console.log(res)
				for(let i = 0,lg = res.length;i < lg;i++){
					let timestamp_obj = res[i].timestamp
					let arr = Object.keys(timestamp_obj)
					let num = 0
					let today = new Date(new Date().toLocaleDateString()).getTime() + ''
					let dif = 24*60*60*1000
					arr.push(today)
					for(let q = arr.length-1;q > 0;q--){
						console.log(q)
						if(parseInt(arr[q]) - parseInt(arr[q-1]) <= dif){
							num ++
						}else{
							break
						}
					}
					res[i].numday = num
				}
				this.$store.commit('addHabit',res)
			}).catch((err)=>{
				
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		font-family: 'iconfont';
		src: url('//at.alicdn.com/t/font_1873541_ean180nigki.ttf') format('truetype');
	}
	.iconfont {
		font-family: iconfont;
	}
</style>
