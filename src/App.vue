<template>
  <div id="app" style="width:100%;height:100%" class="main">
  	<h1 style="display: none;">三亚海棠湾藤桥图文广告打印中心</h1>
  	<div class="heard" >
  			<img src="../static/logo.png"/>
  	<div>
  		<ul class="navbar" id="navbar">
  			<li><router-link :to="'/'">首页</router-link></li>
  			<li><router-link :to="'produce'">产品中心</router-link></li>
  			<li><router-link :to="'we'">联系我们</router-link></li>
  		</ul>
  	</div>
  	</div>
    <router-view/>
  </div>
</template>

<script>


export default {
name: "",

data() {
return {
	


}
},

 created() {
  	var _this=this;
   window.addEventListener('scroll', function(){
   	_this.scr1();
   	
   
   	
   });
},

  methods:{
             scr1(){
      if(document.documentElement.scrollTop||document.body.scrollTop>100){
      	
      	document.getElementById('navbar').style.position='fixed';
      	document.getElementById('navbar').style.top='0';
      }else{
      	document.getElementById('navbar').style.position='';
      }
   		

             }
           },

};
</script>

<style>
*{
	margin: 0;padding: 0;
}
ul li{
	list-style: none;
}
.navbar{
	display: flex;flex-direction: row;
	width:100%;
	background: blue;
	z-index: 100;
	
}
.navbar li{
	flex: 1;
	width:100%;
	height: 36px;
	line-height: 36px;
	text-align: center;
	background: gold;
	color: white;
}
.navbar li a{
list-style: none;
text-decoration: none;
color: white;
}
.swiperi {
	width: 100%;
	height: 100%;
}
#addr{
	text-align: center;
}
.heard{

}
/*.heard-h{height: 90px;width: 100%;
background: gold;}*/
</style>
