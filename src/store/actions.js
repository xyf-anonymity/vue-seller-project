import { GETSELLER, GETGOODS, GETRATINGS } from 'store/mutations_type.js'
import http from '@/http'
// import axios from '@/http/seller/axios'
export default {
    async [GETSELLER]({ commit, state }) {
        // let result =await axios.get('http://localhost:8000/api/seller')
        const { status, data } = await http.seller.getSeller()
        if(status === state.OK) commit(GETSELLER,data)
    },
    async [GETGOODS]({ commit, state }) {
        const { status, data } = await http.seller.getGoods()
        if(status === state.OK) commit(GETGOODS,data)
    },
    async [GETRATINGS]({ commit, state }) {
        const { status, data } = await http.seller.getRatings()
        if(status === state.OK) commit(GETRATINGS,data)
    }
}