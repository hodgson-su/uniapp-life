<template>
	<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
	 :autoplay="true" interval="5000" duration="500">
		<swiper-item class="swiper-item" v-for="(url,index) in itemList" :key="index">
			<img style="width:100%;height: 100%;" :src="url"/>
			<!-- <video :src="url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:{
			itemList:{
				default:()=>{}
			}
		},
		data() {
			return {
				cardCur: 0,
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
.screen-swiper{
	width:100%;
	height: 100%;
}
.tower-swiper .tower-item {
	transform: scale(calc(0.5 + var(--index) / 10));
	margin-left: calc(var(--left) * 100upx - 150upx);
	z-index: var(--index);
}
.swiper-item{
	width: 100%;
	height: 100%;
}
.screen-swiper uni-image, .screen-swiper uni-video, .swiper-item uni-image, .swiper-item uni-video{
	width:100%;
	height: 100%;
}
</style>
