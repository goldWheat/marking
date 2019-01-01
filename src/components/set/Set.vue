<template>
	<div class="baseSet">
		<div class="container-fluid">
			<div class="universalHead">
				<div class="row">
					<div class="col-sm-12"><h4 class="pl-15">基础设置</h4></div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<div class="tabNav">
						<ul>
							<li><router-link tag="a" :to="{name:'organizationLink'}">机构信息</router-link></li>
							<li><router-link tag="a" :to="{name:'accountLink'}">账号设置</router-link></li>	
							<li><router-link tag="a" :to="{name:'changepasswordLink'}">修改密码</router-link></li>
						</ul>
					</div>
				</div>
			</div>	
			<div class="row">
				<div class="col-sm-12">
					<router-view></router-view>	
				</div>
			</div>		
		</div>
	</div>
</template>
<style type="text/css">
		
</style>
