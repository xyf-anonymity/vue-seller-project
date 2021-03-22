import vue from 'vue'
import Vuex from 'vuex'
import actions from 'store/actions'
import state from 'store/state'
import mutations from 'store/mutations'
import getters from 'store/getters'
vue.use(Vuex)
export default new Vuex.Store({
    // strict:true,
    state,
    mutations,
    actions,
    getters
})