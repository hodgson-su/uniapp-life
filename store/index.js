import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// {
// 	id:'',
// 	name:'',//打卡名字
// 	timestamp:{'timestamp':fid},//时间戳
// 	numday:0,//连续天数
//  now_fid:0
// }
// {
// 	fid:'',
// 	name:'',
// }
const store = new Vuex.Store({
	state: {
		activeId:"",
		now_habit_list:[]
	},
	mutations: {
		setActiveId(state,data){
			this.state.activeId = this.state.activeId + "," + data
		},
		addHabit(state,data){
			for(let i in data){
				this.state.now_habit_list.push(data[i])
			}
		},
		changeHabit(state,data){
			console.log(data)
			this.state.now_habit_list[data.index].timestamp[data.time] = data.now_sub_id
		}
	},
	actions: {}
});

export default store
