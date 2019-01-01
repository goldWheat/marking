//二级路由
import Home from './components/Home'
import Product from './components/Product'
import MyActive from './components/MyActive'
import NameLibrary from './components/NameLibrary'
import Set from './components/Set'
import MsgCenter from './components/MsgCenter'
import PayCenter from './components/PayCenter'
import HelpCenter from './components/HelpCenter'

export const routes=[
	{path:'/',name:"homeLink",component:Home},
	{path:'/product',name:"productLink",component:Product},
	{path:'/myactive',name:"myActiveLink",component:MyActive},
	{path:'/namelibrary',name:"nameLibraryLink",component:NameLibrary},
	{path:'/set',name:"setLink",component:Set},
	{path:'/msgcenter',name:"msgCenterLink",component:MsgCenter},
	{path:'/paycenter',name:"payCenterLink",component:PayCenter},
	{path:'/helpcenter',name:"helpCenterLink",component:HelpCenter}
]