import goods from 'pages/goods'
import ratings from 'pages/ratings'
import seller from 'pages/seller'
export default [
    {path:'/goods',component:goods},
    {path:'/ratings',component:ratings},
    {path:'/seller',component:seller},
    {path:'',redirect:'/goods'},
]