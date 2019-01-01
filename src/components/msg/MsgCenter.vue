<template>
	<div class="MsgCenter">
		<div class="container-fluid">
			<div class="universalHead">
				<div class="row">
					<div class="col-sm-12"><h4 class="pl-15">短信管理</h4></div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<div class="tabNav">
						<ul>
							<li><router-link tag="a" :to="{name:'refillLink'}">短信充值</router-link></li>
							<li><router-link tag="a" :to="{name:'smsrecordLink'}">短信记录</router-link></li>	
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