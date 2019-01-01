<template>
	<div class="nameLibrary">
		<div class="container-fluid">
			<div class="universalHead">
				<div class="row">
					<div class="col-sm-3"><h4 class="pl-15">名单列表</h4></div>
					<div class="col-sm-3">
						<div class="universalSearchBox">
							<select class="form-control">
							  <option>请选择筛选条件</option>
							  <option>姓名</option>
							  <option>性别</option>
							  <option>手机号</option>
							</select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="universalSearchBox">
							<input type="text" class="form-control" placeholder="请输入活动名称进行搜索">
						</div>
					</div>
					<div class="col-sm-3">
						<div class="universalSearchBox">
							<button type="button" class="btn btn-info">搜索</button>
							<button type="button" class="btn  btn-warning">添加</button>
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
									 <th>姓名</th>
									 <th>性别</th>
									 <th>注册时间</th>
									 <th>手机号</th>
									 <th>所属活动</th>
									 <th>备注</th>
									 <th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>王迷失</td>
									<td>男</td>
									<td>2018/12/27 21:30</td>
									<td>13409605987</td>
									<td>圣诞礼物大作战</td>
									<td>会员</td>
									<td>
										<button type="button" class="btn btn-success">编辑</button>
										<button type="button" class="btn  btn-danger">删除</button>
									</td>
								</tr>
								<tr>
									<td>王田晨</td>
									<td>女</td>
									<td>2018/12/27 21:30</td>
									<td>13409605987</td>
									<td>圣诞礼物大作战</td>
									<td>非会员</td>
									<td>
										<button type="button" class="btn btn-success">编辑</button>
										<button type="button" class="btn  btn-danger">删除</button>
									</td>
								</tr>
								<tr>
									<td>赵彭阳</td>
									<td>男</td>
									<td>2018/12/27 21:30</td>
									<td>13409605987</td>
									<td>圣诞礼物大作战</td>
									<td>会员</td>
									<td>
										<button type="button" class="btn btn-success">编辑</button>
										<button type="button" class="btn  btn-danger">删除</button>
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