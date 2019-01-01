<template>
	<div class="smsRecord mt-15">
		<div class="row">
			<div class="col-sm-4"><input type="text" class="form-control" placeholder="请输入手机号"> </div>
			<div class="col-sm-2"><button type="button" class="btn btn-info">搜索</button></div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="universalTableList">
					<table class="table table-striped table-bordered table-hover" align="center">
						<thead>
							<tr>
								 <th>接收手机号</th>
								 <th>短信内容</th>
								 <th>条数</th>
								 <th>接收时间</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>13409636963</td>
								<td>[请勿将验证码告知或以短信回复任何人，验证码：954478]，您正在登陆XXXX。</td>
								<td>1</td>
								<td>2018/12/27 21:30</td>
							</tr>
							<tr>
								<td>13409605987</td>
								<td>[请勿将验证码告知或以短信回复任何人，验证码：954478]，您正在登陆XXXX。</td>
								<td>1</td>
								<td>2018/12/27 21:30</td>
							</tr>
							<tr>
								<td>18769852145</td>
								<td>[请勿将验证码告知或以短信回复任何人，验证码：954478]，您正在登陆XXXX。</td>
								<td>1</td>
								<td>2018/12/27 21:30</td>
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
</template>