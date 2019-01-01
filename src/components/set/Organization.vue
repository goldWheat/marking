<template>
	<div class="organization mt-15">
		<form class="form-horizontal">
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">机构名称</label>
				<div class="col-sm-6">
				  <input class="form-control" type="text" id="formGroupInputSmall" placeholder="请输入机构名称">
				</div>
			</div>
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">机构电话</label>
				<div class="col-sm-6">
				  <input class="form-control" type="text" id="formGroupInputSmall" placeholder="请输入机构电话">
				</div>
			</div>
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">所在地区</label>
				<div class="col-sm-2">
				  <select class="form-control input-sm">
				  	<option>河南省</option>
				  </select>	      
				</div>
				<div class="col-sm-2">
				  <select class="form-control input-sm">
				  	<option>平顶山市</option>
				  </select>	      
				</div>	
				<div class="col-sm-2">
				  <select class="form-control input-sm">
				  	<option>鲁山县</option>
				  </select>	      
				</div>			    	    
			</div>
			<div class="form-group form-group-sm">
				<label class="col-sm-2 control-label" for="formGroupInputSmall">机构简介</label>
				<div class="col-sm-6">
				 	<ueditor></ueditor>
				 	<button type="button" class="btn btn-info mt-15">保存</button>
				</div>
			</div>
		</form>
	</div>
</template>	
<style type="text/css">
	.organization{}
</style>
<script>
	import UE from '@/components/UE'
	export default {
	  components:{
	    'ueditor':UE,
	  }
	}
</script>