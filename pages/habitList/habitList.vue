<template>
	<wpage>
		<wheader title="添加新习惯"></wheader>
		
	</wpage>
</template>

<script>
	import wpage from '../../components/page.vue'
	import wheader from '../../components/header.vue'
	export default {
		data() {
			return {
				habitList:[
					{
						'id':1,
						'name':'生活习惯',
						'habitList':[
							{
								'id':1000,
								'name':'早起',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':1001,
								'name':'午睡',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':1002,
								'name':'早睡',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':1003,
								'name':'早睡',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':1004,
								'name':'规律睡眠',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':1005,
								'name':'规律睡眠',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							}
						]
					}]
			}
		},
		methods: {
			
		},
		onLoad(){
			
		},
	}
</script>

<style>

</style>
