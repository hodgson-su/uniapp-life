<template>
	<wpage>
		<wheader title="创建新习惯"></wheader>
		<view class="input">
			<input type="text" v-model="value">
		</view>
		<view class="btn" @click="addHabit">完成</view>
	</wpage>
</template>

<script>
	import wpage from '../../components/page.vue'
	import wheader from '../../components/header.vue'
	export default {
		data() {
			return {
				value:""
			}
		},
		components:{
			wpage,
			wheader
		},
		methods: {
			addHabit(){
				let list = this.$store.state.now_habit_list
				let last_id = list.length > 0 ? parseInt(list[list.length-1].id + 1) : 1000 
				let obj = {
					id:last_id,
					name:this.value,
					timestamp:{},
					numday:0,
					now_sub_id:1
				}
				this.$store.commit('addHabit',[obj])
				this.setLocalStorage('habit_list',this.$store.state.now_habit_list)
				
				uni.navigateBack({
				  delta: 1
				})
			}
		}
	}
</script>

<style scoped>
.input{
	margin:10px;
	border:1px solid #969896;
	border-radius: 20px;
	padding:20px;
}
.btn{
	width:200px;
	height: 30px;
	line-height: 30px;
	margin:0 auto;
	border-radius: 20px;
	background: #11998e; /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #11998e, #38ef7d); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #11998e, #38ef7d); 
	text-align: center;
	color: #FFFFFF;
}
</style>
