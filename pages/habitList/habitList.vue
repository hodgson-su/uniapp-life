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
								'name':'喝充足的水',
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
								'name':'排便',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							}
						]
					},
					{
						'id':2,
						'name':'运动',
						'habitList':[
							{
								'id':2000,
								'name':'初级瑜伽',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2001,
								'name':'中级瑜伽',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2002,
								'name':'高级瑜伽',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2003,
								'name':'生理期瑜伽',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2004,
								'name':'跑步',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2005,
								'name':'散步',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2006,
								'name':'初级HIIT',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2007,
								'name':'中级HIIT',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							},
							{
								'id':2008,
								'name':'高级HIIT',
								'timestamp':{},
								'numday':0,
								'now_sub_id':1
							}
						]
					}
					]
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
