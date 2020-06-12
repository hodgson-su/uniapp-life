import Vue from 'vue'
import App from './App'
import store from './store';

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.openWindow = function(name, params = {}) {
	let path = '../'+name+'/'+name
	uni.navigateTo({
	  url: path + "?item=" + encodeURIComponent(JSON.stringify(params))
	});
}
Vue.prototype.analyItem = function(item){
	return JSON.parse(decodeURIComponent(item))
}

Vue.prototype.setLocalStorage = function(key,item){
	try {
	    uni.setStorageSync(key,item);
	} catch (e) {
	    // error
	}
}
Vue.prototype.getLocalStorage = function(key){
	return new Promise(function(resolve,reject){
		uni.getStorage({
		    key: key,
		    success: function (res) {
		        console.log(res.data);
				resolve(res.data)
		    },
			fail:function(res){
				console.log(res)
				reject(res)
			}
		})
	})
}

const app = new Vue({
	store,
    ...App
})
app.$mount()
