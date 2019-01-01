<template>
	<div class="myActive">
		<div class="container-fluid">
			<div class="universalHead">
				<div class="row">
					<div class="col-sm-4"><h4 class="pl-15">我的活动</h4></div>
					<div class="col-sm-4 pull-right">
						<div class="mr-15 universalSearchBox">
							<input type="text" class="form-control" placeholder="请输入活动名称进行搜索">
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<div class="universalTableList">
						<table class="table table-striped table-bordered table-hover" align="center">
							<thead>
								<tr>
									 <th>活动名称</th>
									 <th>活动时间</th>
									 <th>活动预览</th>
									 <th>已参与人数</th>
									 <th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>圣诞惊喜相送！</td>
									<td>2018/12/25 15:48-2018/12/31 15:48</td>
									<td><i class="iconfont">&#xe60c;</i> </td>
									<td>456</td>
									<td>
										<button type="button" class="btn btn-success">编辑</button>
										<button type="button" class="btn btn-info">链接</button>
										<button type="button" class="btn  btn-warning">数据</button>
										<button type="button" class="btn  btn-danger">关闭</button>
									</td>
								</tr>
								<tr>
									<td>圣诞惊喜相送！</td>
									<td>2018/12/25 15:48-2018/12/31 15:48</td>
									<td><i class="iconfont">&#xe60c;</i> </td>
									<td>456</td>
									<td>
										<button type="button" class="btn btn-success">编辑</button>
										<button type="button" class="btn btn-info">链接</button>
										<button type="button" class="btn  btn-warning">数据</button>
										<button type="button" class="btn  btn-danger">关闭</button>
									</td>
								</tr>
								<tr>
									<td>圣诞惊喜相送！</td>
									<td>2018/12/25 15:48-2018/12/31 15:48</td>
									<td><i class="iconfont">&#xe60c;</i> </td>
									<td>456</td>
									<td>
										<button type="button" class="btn btn-success">编辑</button>
										<button type="button" class="btn btn-info">链接</button>
										<button type="button" class="btn  btn-warning">数据</button>
										<button type="button" class="btn  btn-danger">关闭</button>
									</td>
								</tr>
							</tbody>
						</table>
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
