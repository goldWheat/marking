<template>
	<div class="nav-list">
		<ul>
			<li><router-link tag="a" :to="{name:'homeLink'}"><i class="iconfont">&#xe619;</i> 主页</router-link></li>
			<li><router-link tag="a" :to="{name:'productLink'}"><i class="iconfont">&#xe653;</i> 产品中心</router-link> </li>
			<li><router-link tag="a" :to="{name:'myActiveLink'}"><i class="iconfont">&#xe62a;</i> 我的活动</router-link> </li>
			<li><router-link tag="a" :to="{name:'nameLibraryLink'}"><i class="iconfont">&#xe612;</i> 名单列表</router-link> </li>
			<li><router-link tag="a" :to="{name:'setLink'}"><i class="iconfont">&#xe62d;</i> 基础设置</router-link> </li>
			<li><router-link tag="a" :to="{name:'msgCenterLink'}"><i class="iconfont">&#xe64c;</i> 短信管理</router-link> </li>
			<li><router-link tag="a" :to="{name:'payCenterLink'}"><i class="iconfont">&#xe8f9;</i>支付中心</router-link> </li>
			<li><router-link tag="a" :to="{name:'helpCenterLink'}"><i class="iconfont">&#xe73a;</i> 帮助中心</router-link> </li>
		</ul>
	</div>
</template>

<style type="text/css">
	.nav-list{
		background:#1c2b36;
		position: fixed;
		left: 0;
		top: 50px;
		height: 100%;
		width: 196px
	}
	.nav-list ul li{
		list-style: none;
	}
	.nav-list ul{
		padding:0;
	}	
	.nav-list ul li a{
		color: #869fb1;
		font-weight: 600;
		padding:15px 0;
		display: block;
		padding-left: 30px
	}
	.nav-list ul li a:hover,.nav-list ul li a.router-link-exact-active{
		text-decoration: none;
		color: #fff;
		background: #131e26;
	}	
</style>