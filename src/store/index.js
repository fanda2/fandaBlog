import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}

const mutations = {

}
const state = {
    toptitle: 'fanda 的博客，欢迎你的光顾~',
}

const getters = {

}

export default new Vuex.Store({
    actions, ///触发简写actions:actions
    mutations,
    state,
    getters
})