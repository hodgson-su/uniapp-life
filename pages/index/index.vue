<template>
	<wpage>
		<wheader page="home" title="今日打卡"></wheader>
		<view class="content">
			<view class="lab" v-for="(item,index) in now_habit_list" :key="index" 
			:class="{'active':item.timestamp[today_timestamp]}"
			@click="openWindow('habitInfo',{'index':index})"
			>
				<view class="icon" @click.stop="finishHabit(index)">
					<text class="iconfont" v-if="item.timestamp[today_timestamp]">&#xe62f;</text>
					<text class="iconfont" v-else>&#xe624;</text>
				</view>
				<view class="right">
					<view class="name">{{item.name}}</view>
					<view class="note">已坚持{{Object.keys(item.timestamp).length}}天</view>
				</view>
			</view>
			<!-- <view class="lab add-btn" @click="openWindow('addHabit')">
				<view class="icon">
					<text class="iconfont">&#xe64f;</text>
				</view>
				<view class="right">添加新习惯</view>
			</view> -->
		</view>
	</wpage>
</template>

<script>
	import wpage from '../../components/page.vue'
	import wheader from '../../components/header.vue'
	
	var that
	export default {
		data() {
			return {
				today_timestamp:''//当天零点时间戳
			}
		},
		onLoad() {
			that = this
			this.today_timestamp = new Date(new Date().toLocaleDateString()).getTime() + ''
			this.getHabitList()
			// this.getActiveId()
		},
		components:{
			wpage,
			wheader
		},
		methods: {
			getHabitList:async function(){
				// this.setLocalStorage('habit_list',this.now_habit_list)
			},
			getActiveId:async function(){
				// this.$store.commit('setActiveId',await this.getLocalStorage('now_active'))
				// new Promise(this.getLocalStorage('now_active')).then((res)=>{
				// 	console.log(res)
				// }).catch((res)=>{
				// 	console.log('err')
				// })
			},
			finishHabit(index){
				let habit = this.now_habit_list[index]
				let timestamp_arr = Object.keys(habit.timestamp)
				let time = this.today_timestamp
				if(timestamp_arr[timestamp_arr.length-1] == this.today_timestamp){
					//已打卡，取消打卡
					habit.numday = habit.numday - 1
					delete habit.timestamp[time]
				}else{
					habit.numday = habit.numday + 1
					habit.timestamp[time] = habit.now_sub_id
				}
				this.$set(this.now_habit_list,index,this.now_habit_list[index])
				this.setLocalStorage('habit_list',this.now_habit_list)
			},
			calnumday(timestamp){
				
			}
		},
		computed:{
			now_habit_list(){
				let obj = this.$store.state.now_habit_list
				return this.$store.state.now_habit_list
			}
		}
	}
</script>

<style scoped>
.content{
	flex: 1;
	overflow: auto;
}
.lab{
	display: flex;
	margin:10px;
	background-color: #abc88b;
	color: #FFFFFF;
	padding: 10px;
	height: 50px;
	line-height: 50px;
	border-radius: 20px;
}
.lab.active{
	background-color: #1d953f;
}
.lab .icon .iconfont{
	font-size: 40px;
	margin-left: 20px;
}
.lab .right{
	margin-left: 25px;
	line-height: 25px;
	color: 24px;
}
.add-btn{
	background-color: #fff;
	border:1px solid #969896;
	color: #969896;
}
.add-btn .right{
	line-height: 50px;
}
</style>
