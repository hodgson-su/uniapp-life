const { Secure } = require("mali-secure");
import axios from "axios";
import MD5 from "./md5.js"

// const baseUrl = 'https://api-knowleage.bestmali.cn';
const baseUrl = 'https://gw-api.pinduoduo.com/api/router'

axios.defaults.baseURL = baseUrl;

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.post["Accept"] = "application/json";


function formatUrl(that, data) {
  let appData = {
	  client_id:"ccba9287291840019c4ee4afb9fb345b",
	  data_type:"JSON"
  };
  for(let i in data){
	  if(data[i] !== null){
		  appData[i] = data[i]
	  }
  }
  let client_secret = "0ddf1cca2eaf9bff7c7b17ed6103bed036c148c9"
  let signString = "";
  let stringA = "?";
  let keyArr = [];
  let i = 0;
  // appData["timestamp"] = Date.parse(new Date()) / 1000;
  appData["timestamp"] = "1591247412"
  for (let info in appData) {
    keyArr[i] = info;
    i++;
  }
  keyArr = keyArr.sort();
  for (var index in keyArr) {
    if (
      appData[keyArr[index]] !== undefined &&
      appData[keyArr[index]] !== "undefined"
    ) {
		 if(keyArr[index]==="goods_id_list"){
			// console.log("goods_id_list===>value====>",appData[keyArr[index]])
			stringA +=keyArr[index]+"="+"["+appData[keyArr[index]]+"]"+"&"
			signString+=keyArr[index]+"["+appData[keyArr[index]]+"]"
		}else{
			stringA =
			  stringA +
			  keyArr[index] +
			  "=" +
			  ajaxUrlEncode(appData[keyArr[index]]) +
			  "&";
			signString =
			  signString +
			  keyArr[index] +
			  appData[keyArr[index]]//ajaxUrlEncode(appData[keyArr[index]])
		}
      
    }
  }
  stringA = stringA
    .replace(/\+/g, "")
    .replace(/\s/g, "")
    .replace(/\-/g, "");
  signString = signString
    .replace(/\+/g, "")
    .replace(/\s/g, "")
    .replace(/\-/g, "");
  let stringSignTemp = client_secret + signString + client_secret;
  let sign = MD5.Md5.hashStr(stringSignTemp).toUpperCase(); //注：MD5签名方式
  stringA = baseUrl+ stringA + "sign=" + sign;
  return stringA;
}
function ajaxUrlEncode(string) {
  string = string + "";
  string = encodeURIComponent(string);
  string = string
    .replace(/%20/g, "+")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
  let asciiStr = "~'";
  let encodeStr = "%7e%27";
  for (var i = 0; i < asciiStr.length; i++) {
    let replaceStr = asciiStr.substr(i, 1);
    let changeStr = encodeStr.substr(i * 3, 3);
    string = string.replace(new RegExp(replaceStr, "g"), changeStr);
  }
  return string;
}

function get(that, params) {
  let url = productUrl + formatUrl(that, params.url)
  showLoading()
  uni.request({
    url: url,
    success: res => {
  		hideLoading()
      let result = res.data
      if (result.code == 0) {
        params.success(result.data);
      } else if (result.code == -1911) {
        that.$store.commit("clearUser");
        uni.clearStorage();
        that.openWindow("login");
      } else {
        if (params.error) {
           params.error(result);
        }
      }
    },
    fail: res => {
  		hideLoading()
      console.log(res);
    }
  })
}

function post(that, params) {
	axiosPost(that, params)
  // uni.getStorage({
  //     key: 'token',
  //     success: function (res) {
		//   axiosPost(that, params,res.data)
		//   // if(!that.$store.state.userData.id){
		// 	 //  axiosPost(that,{
		// 		// url:'getUserInfo',
		// 		// success(data){
		// 		// 	that.$store.commit('changeUser',data)
		// 		// }
		// 	 //   },res.data)
		//   // }
  //     },
	 //  fail() {
	 //  	axiosPost(that, params)
	 //  }
  // })
}
function axiosPost(that, params,token) {
  showLoading()
  let url =  formatUrl(that, params.data)
  uni.request({
    method: "post",
    url: url, //仅为示例，并非真实接口地址
    // header: {
    //   Accept: "application/json",
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    success: res => {
	  hideLoading()
      params.success(res.data)
    },
    fail: res => {
		hideLoading()
      if (params.error) {
        params.error(res);
      }
    }
  })
}

const apiMap = {
  getMiniToken:'/auth/sso/getMiniToken',//
  wxLogin:'/auth/sso/login',
  userInfo:'/user/user/info',
  categoryList:'/mapi/category/lists',//类别列表
  articleList:'/mapi/article/lists',//文章列表
  articleViews:'/mapi/article/views',//浏览上报
  feedback:'/user/feedback/add',
  updatelike:'/user/like/like',//点赞
  likeList:'/user/like/list',//点赞文章列表
  msgbox:'/user/msgbox/lists',//消息通知
  studyUp:'/user/study/up',//加入学习列表
  studyList:'/user/study/list',//用户学习列表
  getOssToken:'/common/oss/getToken'
};

function showLoading(){
	uni.showLoading({
	    title: '加载中...'
	})
}

function hideLoading(){
	uni.hideLoading()
}

export default { post, get}