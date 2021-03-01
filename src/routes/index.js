import test1 from 'pages/test1'
import test2 from 'pages/test2'
export default [
    {path:'/test1',component:test1},
    {path:'/test2',component:test2},
    {path:'',redirect:'/test1'},
]