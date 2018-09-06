<template>
	<div>
	<swiper :options="swiperOption" class="swiperc">
      <swiper-slide><img class="swiperi" src="../../static/1-1P1050956050-L.jpg"></swiper-slide>
      <swiper-slide><img class="swiperi" src="../../static/1-1P1050956210-L.jpg"></swiper-slide>
    </swiper>
    <div class="needs">
    		您的需求
    </div>
    <table border="0" cellspacing="0" cellpadding="0" class="needs-t">
    	<tr><th>工程图纸处理</th><th>高精写真喷绘</th><th>专业文件装订</th></tr>
    	<tr><td>出蓝白图</td><td>室内外写真</td><td>无线胶装</td></tr>
    	<tr><td>招标文件</td><td>效果图输出</td><td>骑马订装订</td></tr>
    	<tr><td>会议资料</td><td>宣传广告海报</td><td>软皮精装</td></tr>
    	<tr><td>折图</td><td>KT板展板</td><td>活页式装订</td></tr>
    </table>
    <div class="produce-1">
    	项目展示
    </div>
    <swiper :options="swiperOption1" class="swiperc">
      <swiper-slide><img class="swiperi"  src="../../static/1-1P105101159648.jpg"></swiper-slide>
      <swiper-slide><img class="swiperi" src="../../static/1-1P1060926260-L.jpg"></swiper-slide>
       <swiper-slide><img class="swiperi" src="../../static/1-1P106093F80-L.jpg"></swiper-slide>
      <swiper-slide><img class="swiperi" src="../../static/1-1P106093U10-L.jpg"></swiper-slide>
      <swiper-slide><img class="swiperi" src="../../static/1-1P1060930500-L.jpg"></swiper-slide>
      <swiper-slide><img class="swiperi" src="../../static/1-1P1060932560-L.jpg"></swiper-slide>
      <swiper-slide><img class="swiperi" src="../../static/1-1P1060935150-L.jpg"></swiper-slide>
      <swiper-slide><img class="swiperi" src="../../static/1-1P1060940300-L.jpg"></swiper-slide>
 
    </swiper>
    <div class="we">
    	联系我们
    </div>
  
    <div id="addr">
    	 <h5>总店地址：三亚市海棠区林旺中学对面唯彩图文</h5>
    <p>联系热线：13876571681   18889889186 <br /> qq:515375580  </p>
    <h5>分店地址：三亚市海棠区政府公交站华莱士旁边</h5>
    <p>联系热线：18789380351 15103689046  <br />  qq:2274918991  </p>
    </div>
   </div>
</template>

<script>
	import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
name: "Carousel",
data() {
return {
	lazyLoading : true,
swiperOption: {
//可选选项，自动滑动
     speed:1000,
			autoplay: {
　　　   　delay: 2500,
　　     disableOnInteraction: false
　　},
// 循环滚动
    effect : 'cube',
				loop : true,
//轮播图分页
			pagination: {
					el: '.swiper-pagination',
				  clickable: true,
					},

		},
swiperOption1:{
	 slidesPerView : 2,
  spaceBetween : 20,
   
			loop : true,
     autoplay: {
　　　   　delay: 1800,
　　     disableOnInteraction: false
　　},
   
}
};
},
computed: {

},


components: {
swiper,
swiperSlide
}
};
</script>
</script>

<style>
	.needs,.produce-1,.we{
		height: 36px;
	line-height: 36px;
	text-align: center;
	background: gold;
	color: white;
	}
	.needs-t{
		margin: 0 auto;
			text-align: center;
			line-height: 60px;
			width: 100%;
			color: gold;
			background: #aaa;
	}
	#addr{
		color: #ff7f00;
		padding: 10px 0 50px 0;
		//background: #ff7f00;
	}
	#addr h5{
		padding-top: 30px;
	}
	
</style>