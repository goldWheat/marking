<template>
	<div class="homeBox">
		<div class="container-fluid  mt-15">
			<div class="row">
				<div class="col-sm-3">
					<div class="brief center-block">
						<h1>328</h1>
						<p>本月活动收入(元)</p>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="brief center-block">
						<h1>328</h1>
						<p>本月活动访问量</p>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="brief center-block">
						<h1>328</h1>
						<p>本月活动分享朋友总次数</p>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="brief center-block">
						<h1>328</h1>
						<p>本月活分享朋友圈总次数</p>
					</div>
				</div>
			</div>
			<div class="row mt-15">
				<div class="col-sm-12">
					<div id="activeEchart"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12"><h4 class="fontBold">活动更新墙</h4></div>
				<div class="col-sm-4">
					<div class="wall center-block">
						<h5>圣诞大派对</h5>
						<div class="wallPicCode"><img src="../assets/images/christ.jpg"></div>
						<div class="watchCreat mt-15">
							<span><i class="iconfont">&#xe68b;</i> 754</span>
							<button type="button" class="btn btn-success pull-right">立即创建</button>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="wall center-block">
						<h5>圣诞大派对</h5>
						<div class="wallPicCode"><img src="../assets/images/christ.jpg"></div>
						<div class="watchCreat mt-15">
							<span><i class="iconfont">&#xe68b;</i> 754</span>
							<button type="button" class="btn btn-success pull-right">立即创建</button>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="wall center-block">
						<h5>圣诞大派对</h5>
						<div class="wallPicCode">
							<img src="../assets/images/christ.jpg">
								<div class="opacityBox">
									<img src="../assets/images/smallcode.jpg">
								</div>
						</div>
						<div class="watchCreat mt-15">
							<span><i class="iconfont">&#xe68b;</i> 754</span>
							<button type="button" class="btn btn-success pull-right">立即创建</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.homeBox{

	}
	.brief{
		width: 85%;
		padding-bottom: 10px;
		background: #fff;
		overflow: hidden;
	}
	.brief h1{
		color: #23b7e5;
		text-align: center;
	}
	.brief p{
		text-align: center;
	}
	#activeEchart{
		height: 300px
	}
	.fontBold{
		font-weight: 600;
	}
	.wall{
		padding:15px;
		padding-top: 5px;
		background:#fff;
	}
	.wallPicCode img:first-child{
		width: 100%
	}
	.watchCreat{
		overflow: hidden;
	}
	.watchCreat span{
		line-height: 35px
	}
	.wallPicCode{
		position: relative;
	}
	.opacityBox{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background:rgba(0,0,0,0.6);
		display: flex;
	    justify-content:center;
	    align-items:Center;

	}
	.wallPicCode .opacityBox img{
		width: 40%;	
	}
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

	/* 开始过渡阶段,动画出去阶段 */
.fade-enter-active,.fade-leave-active{
  transition: all 0.5s ease-out;
}
/* 进入开始 */
.fade-enter{
  transform: translateY(-500px);
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
  transform: translateY(500px);
  opacity: 0;
}
</style>
<script type="text/javascript">
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  name: 'homebox',
  data: {
  	show: true
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('activeEchart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '年度名单统计' },
            tooltip: {},
            xAxis: {
                data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
            },
            yAxis: {},
            series: [{
                name: '本月新增名单',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20,90,40,120,43,17,85]
            }]
        });
    }
  }
}

</script>