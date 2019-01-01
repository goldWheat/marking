import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Product from '@/components/Product'
import MyActive from '@/components/MyActive'
import NameLibrary from '@/components/NameLibrary'
import Set from '@/components/set/Set'
import MsgCenter from '@/components/msg/MsgCenter'
import PayCenter from '@/components/PayCenter'
import HelpCenter from '@/components/HelpCenter'

//二级路由
import Organization from '@/components/set/Organization'//机构信息
import Account from '@/components/set/Account'//账号设置
import ChangePassword from '@/components/set/ChangePassword'//修改密码

import ReFill from '@/components/msg/Refill'//短信充值
import SmsRecord from '@/components/msg/SmsRecord'//短信记录
Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{path:'/',name:"homeLink",component:Home},
		{path:'/product',name:"productLink",component:Product},
		{path:'/myactive',name:"myActiveLink",component:MyActive},
		{path:'/namelibrary',name:"nameLibraryLink",component:NameLibrary},
		{path:'/set',name:"setLink",redirect:'/set/organization',component:Set,children:[
			{path:'/set/organization',name:"organizationLink",component:Organization},
			{path:'/set/account',name:"accountLink",component:Account},
			{path:'/set/changepassword',name:"changepasswordLink",component:ChangePassword}
		]},
		{path:'/msgcenter',name:"msgCenterLink",redirect:'/msg/refill',component:MsgCenter,children:[
			{path:'/msg/refill',name:"refillLink",component:ReFill},
			{path:'/msg/smsrecord',name:"smsrecordLink",component:SmsRecord}			
		]},
		{path:'/paycenter',name:"payCenterLink",component:PayCenter},
		{path:'/helpcenter',name:"helpCenterLink",component:HelpCenter}
	]
})
