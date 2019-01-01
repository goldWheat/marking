<template>
  <div class="header">
	<div class="row">
		<div class="col-sm-3 col-md-2">
			<div class="scrmLogo"><img src="../assets/images/logo.jpg"></div>
		</div>
		<div class="col-sm-9 col-md-10">
			<div class="row">
				<div class="col-sm-8">
					<p class="adg">
					<span><i class="iconfont">&#xe611;</i></span> 
					<b>2018年12月20日新活动上线，可以正常使用请查收！</b>
					</p>
				</div>
				<div class="col-sm-4">
					<div class="person-info pull-right">
						<span><img src="../assets/images/photo.jpg"></span>
						<span>肉味冰淇淋</span>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return{

    }
    
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.adg{
		color: #666;
		font-weight: normal;
		margin:0;
		line-height: 50px
	}
	.adg b{
		font-weight: normal;
	}
	.person-info{
		padding-right:20px;
	}
	.person-info span:nth-child(1){
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 5px;
	}
	.person-info span:nth-child(1) img{
		width: 100%;
	}
	.person-info span:nth-child(2){
		display: inline-block;
		height: 20px;
		line-height: 20px;
		vertical-align: top;
		margin-top: 15px

	}
</style>
