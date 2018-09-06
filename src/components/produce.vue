<template>
	<div id="" style="width: 100%;">
		<div class="produce">
  	<ul>
  		<li><img src="../../static/sty/3.jpg"/></li>
  		<li><img src="../../static/sty/1.jpg"/></li>
  		<li><img src="../../static/sty/9.jpg"/></li>
  		<li><img src="../../static/sty/2.jpg"/></li>
  		
  		<li><img src="../../static/sty/11.jpg"/></li>
  		<li><img src="../../static/sty/12.jpg"/></li>
  			<li><img src="../../static/sty/7.jpg"/></li>
  		<li><img src="../../static/sty/15.jpg"/></li>
  			<li><img src="../../static/sty/5.jpg"/></li>
  	 <li><img src="../../static/sty/16.jpg"/></li>
  	<li><img src="../../static/sty/6.jpg"/></li>
  	 <li><img src="../../static/sty/8.jpg"/></li>
  	
  		
  	</ul>
   
    
    
    
    
    
    
   
  </div>
	</div>
  
</template>

<script>
export default {
  name: 'produce',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	padding: 0;
	margin: 0;
}
img{
	width: 100%;
	height: 100%;
}
@media screen and (min-width: 300px)  {
	.produce li{
		width: 50%;
		float: left;
	}
}
</style>
