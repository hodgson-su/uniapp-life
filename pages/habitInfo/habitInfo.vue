<template>
	<wpage>
		<wheader :title="title"></wheader>
		<view class="content">
			<view class="title">数据统计</view>
			<view class="num_show">
				<view class="left inline">
					<view>{{habit.numday}}天</view>
					<view>连续完成</view>
				</view>
				<view class="middle inline" @click="finishHabit">
					<view class="icon" :class="{'active':habit.timestamp[today_timestamp]}">
						<text class="iconfont">&#xe62f;</text>
					</view>
					<view class="note">
						{{habit.timestamp[today_timestamp] ? '今日已完成' : '今日未完成'}}
					</view>
				</view>
				<viw class="right inline">
					<view>{{Object.keys(habit.timestamp).length}}天</view>
					<view>总共完成</view>
				</viw>
			</view>
			<!-- 日历展示 -->
			
			<!-- 二级目录显示 -->
			
			<!-- 可添加备注 -->
		</view>
	</wpage>
</template>

<script>
	import wpage from '../../components/page.vue'
	import wheader from '../../components/header.vue'
	export default {
		data() {
			return {
				title:'',
				habit:{},
				today_timestamp:''//当天零点时间戳
			}
		},
		onLoad(opt) {
			let index = this.analyItem(opt.item).index
			this.habit = this.$store.state.now_habit_list[index]
			this.title = this.habit.name
			this.today_timestamp = new Date(new Date().toLocaleDateString()).getTime() + ''
		},
		components:{
			wpage,
			wheader
		},
		methods: {
			finishHabit(){		
				let obj = this.$store.state.now_habit_list
				let habit = this.habit
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
				this.habit = habit
				this.setLocalStorage('habit_list',obj)
			}
		}
	}
</script>

<style scoped>
.content .title{
	height: 30px;
	line-height: 30px;
	padding-left: 15px;
	border-bottom: 1px solid #eee;
	border-top: 10px solid #eee;
}
.num_show{
	height: 80px;
	display: flex;
	align-items: center;
	text-align: center;
	border-bottom: 10px solid #eee;
	padding-bottom: 15px;
}
.num_show .inline{
	flex: 1;
}
.num_show .middle .icon{
	font-size: 40px;
	color: #999;
}
.num_show .middle .icon.active{
	color: #1d953f;
}
</style>
