import Vue from 'vue'
import Vuex from 'vuex'

// 使用VueX
Vue.use(Vuex)

const actions = {

}

const mutations = {
    ChangeStatus(state, value) {
        state.loginBox = value;
    }

}
const state = {
    toptitle: 'fanda 的博客，欢迎你的光顾~',
    loginBox: false,
}

const getters = {

}

export default new Vuex.Store({
    actions, ///触发简写actions:actions
    mutations,
    state,
    getters
})