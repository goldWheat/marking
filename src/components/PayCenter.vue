<template>
	<div class="payCenter">
		<div class="container-fluid">
			<div class="universalHead">
				<div class="row">
					<div class="col-sm-8"><h4 class="pl-15">支付中心</h4></div>
					<div class="col-sm-4"><h4 class="pr-15 text-right">总收入:<strong class="text-danger">￥2019.00元</strong></h4></div>
				</div>
			</div>
			<div class="row mt-15">
				<div class="col-sm-4"><input type="text" class="form-control" placeholder="请输入付款人或者手机号"> </div>
				<div class="col-sm-2"><button type="button" class="btn btn-info">搜索</button></div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<div class="universalTableList">
						<table class="table table-striped table-bordered table-hover" align="center">
							<thead>
								<tr>
									 <th>微信订单号</th>
									 <th>支付场景</th>
									 <th>支付日期</th>
									 <th>支付金额</th>
									 <th>支付人</th>
									 <th>手机号</th>
									 <th>支付状态</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>WXZH20181125</td>
									<td>投票大行动</td>
									<td>2018/12/31 23:00</td>
									<td>￥29.90</td>
									<td>肉味冰淇淋</td>
									<td>15893495293</td>
									<td>已结算</td>
								</tr>
								<tr>
									<td>WXZH20181125</td>
									<td>投票大行动</td>
									<td>2018/12/31 23:00</td>
									<td>￥29.90</td>
									<td>blueMoon</td>
									<td>18310316971</td>
									<td>已结算</td>
								</tr>
								<tr>
									<td>WXZH20181125</td>
									<td>投票大行动</td>
									<td>2018/12/31 23:00</td>
									<td>￥29.90</td>
									<td>八角花</td>
									<td>18310316971</td>
									<td>已结算</td>
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