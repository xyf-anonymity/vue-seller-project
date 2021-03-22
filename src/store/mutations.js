import {GETSELLER,GETGOODS,GETRATINGS} from 'store/mutations_type.js'
export default {
    [GETSELLER](state,seller) {
        state.seller = seller
    },
    [GETGOODS](state,goods) {
        state.goods = goods
    },
    [GETRATINGS](state,ratings) {
        state.ratings = ratings
    }
}