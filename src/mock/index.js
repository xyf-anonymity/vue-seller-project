import Mock from 'mockjs'
import data from './data'
const BASEURL = 'http://localhost:8000'
Mock.mock(`${BASEURL}/api/data`, {
    status: 0,
    data,
})