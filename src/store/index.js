import Vue from 'vue'
import Vuex from 'vuex'
import base from './base'

Vue.use(Vuex)

export default function () {
    return new Vuex.Store({
        modules: {
            base
        }
    })
}