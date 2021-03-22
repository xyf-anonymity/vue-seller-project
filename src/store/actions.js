import { GETSELLER, GETGOODS, GETRATINGS } from 'store/mutations_type.js'
import axios from '@/http'
export default {
    async [GETSELLER]({ commit, state }) {
        const { status, data } = await axios.get('api/seller')
        if(status === state.OK) commit(GETSELLER,data)
    },
    async [GETGOODS]({ commit, state }) {
        const { status, data } = await axios.get('api/goods')
        if(status === state.OK) commit(GETGOODS,data)
    },
    async [GETRATINGS]({ commit, state }) {
        const { status, data } = await axios.get('api/ratings')
        if(status === state.OK) commit(GETRATINGS,data)
    }
}