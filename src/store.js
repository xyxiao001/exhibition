import Vue from 'vue'
import Vuex from 'vuex'
import langs from './i18n/route.json'
import { loadLanguageAsync } from './i18n'
import { stat } from 'fs'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: '',
    lanList: langs,
    path: '/'
  },
  getters: {
    getLanguage (state) {
      return state.language
    },
    getLanList (state) {
      return state.lanList
    },
    getPath (state) {
      return state.path
    }
  },
  mutations: {
    LANGUAGE_CHANGE (state, ployed) {
      state.language = ployed.language 
      loadLanguageAsync(state.language).then(() => {
        console.log('language change', ployed.language)
      })
    },
    PATH_CHANGE (state, ployed) {
      state.path = ployed.path
    }
  },
  actions: {
    setLanguage ({ commit }, ployed) {
      commit('LANGUAGE_CHANGE', ployed)
    },

    setPath ({ commit }, ployed) {
      commit('PATH_CHANGE', ployed)
    }
  }
})
