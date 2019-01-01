<template>
	<div class="helpCenter">
		<div class="container-fluid">
			<div class="universalHead">
				<div class="row">
					<div class="col-sm-12"><h4 class="pl-15">帮助中心</h4></div>
				</div>
			</div>
			<div class="row mt-15">
				<div class="col-sm-4"><input type="text" class="form-control" placeholder="请输入搜索内容"> </div>
				<div class="col-sm-2"><button type="button" class="btn btn-info">搜索</button></div>
			</div>			
			<div class="articleBox mt-15">
				<div class="row">
					<div class="col-sm-2"><img src="../assets/images/christ.jpg" class="img-responsive"></div>
					<div class="col-sm-10">
						<h4>想知道12月份怎么做吗？看了这篇文章就知道啦！</h4>
						<p>忙忙碌碌的一年马上就要结束了，12月需要大干一场了，无论结果如何，都需要去尝试一下万一成功了呢！</p>
						<p class="articleCount"><span><i class="iconfont">&#xe68b;</i> 754</span><span class="pl-15">2019/01/01 0:12</span></p>
					</div>
				</div>
			</div>
			<div class="articleBox mt-15">
				<div class="row">
					<div class="col-sm-2"><img src="../assets/images/christ.jpg" class="img-responsive"></div>
					<div class="col-sm-10">
						<h4>想知道12月份怎么做吗？看了这篇文章就知道啦！</h4>
						<p>忙忙碌碌的一年马上就要结束了，12月需要大干一场了，无论结果如何，都需要去尝试一下万一成功了呢！</p>
						<p class="articleCount"><span><i class="iconfont">&#xe68b;</i> 754</span><span class="pl-15">2019/01/01 0:12</span></p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6">
					<p class="dataNum">共2页20条数据</p>
				</div>
				<div class="col-sm-6">
					<nav aria-label="..." class="pull-right">
					  <ul class="pagination">
					    <li class="disabled">
					      <span>
					        <span aria-hidden="true">上一页</span>
					      </span>
					    </li>
					    <li class="active">
					      <span>1 <span class="sr-only">(current)</span></span>
					    </li>
					    <li>
					      <span>2<span class="sr-only">(current)</span></span>
					    </li>
					    <li class="disabled">
					      <span>
					        <span aria-hidden="true">下一页</span>
					      </span>
					    </li>					    
					  </ul>
					</nav>
				</div>
			</div>							
		</div>
	</div>	
</template>
<style type="text/css">

	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-out .5s;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(0);
	  }
	}
	.articleBox{
		padding:10px;
		background:#fff;
	}
	.articleCount{
		color: #ccc;
		margin:0; 
		text-align: right;
	}
</style>
<script type="text/javascript">
	export default{
	  name: 'homebox',
	  data(){
	  	return{
	  		show: true
	  	}
	  },
	  methods:{
	  	codeMove(){
	  		alert("a")
	  	}
	  }
	}
</script>