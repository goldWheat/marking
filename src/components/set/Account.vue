<template>
	<div class="account mt-15">
		<form class="form-horizontal">
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">头像</label>
				<div class="col-sm-4">
					 <img src="../../assets/images/photo.jpg" alt="账号头像" class="setPhoto img-circle">
					 <button type="button" class="btn btn-info">点击上传</button>
				</div>
			</div>		
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">账号</label>
				<div class="col-sm-6">
				  <input class="form-control" type="text" placeholder="登陆账号" value="19654123" disabled>
				</div>
			</div>
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">昵称</label>
				<div class="col-sm-6">
				  <input class="form-control" type="text" value="肉味冰淇淋" placeholder="账号昵称">
				</div>
			</div>
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">电话</label>
				<div class="col-sm-4">
				  <input class="form-control" type="text" value="18310316971" placeholder="手机号">
				</div>
				<div class="col-sm-1"> 
					<button type="submit" class="btn btn-info">修改手机号</button>
				</div>				
			</div>
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label"></label>
				<div class="col-sm-4">
				 <button type="button" class="btn btn-info mt-15">保存</button>
				</div>		
			</div>			
		</form>
	</div>
</template>	
<style>
	.setPhoto{
		width: 80px;
		height: 80px;
		border:2px solid #fff;
	}
</style>