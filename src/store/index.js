import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state() {
        return {
            userName: '',
            phone: ''
        }
    },
    getters: {

    },
    mutations: {
        saveInfo(state) {
            state.userName = 'zs'
            state.phone = 1333333333
        }
    },
    actions: {
        getUserInfo(context) {
            setTimeout(() => {
                context.commit('saveInfo')
            }, 500)
        }
    }

})