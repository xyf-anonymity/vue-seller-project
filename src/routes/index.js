import goods from 'pages/goods'
import evaluation from 'pages/evaluation'
import seller from 'pages/seller'
export default [
    {path:'/goods',component:goods},
    {path:'/evaluation',component:evaluation},
    {path:'/seller',component:seller},
    {path:'',redirect:'/goods'},
]