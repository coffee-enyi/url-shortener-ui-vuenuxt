import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    redirecturl: '',
    tokenname: '',
    enteredurl: '',
    shortenedurl: '',
    basetimecount: 0,
    visitscount: 0
  })

export const mutations = {
    updateurl(state, payloadamount) {
        state.redirecturl = payloadamount;
        state.basetimecount = 6;
    },

    updatetokenname(state, tokenname) { 
        state.tokenname = tokenname;
    },

    reducetime(state) {
      state.basetimecount--;
    },

    updatevisits(state, count) {
        state.visitscount = count;
    },

    saveshortenedurl(state, url) {
        state.shortenedurl = url;
    },

    saveenteredurl(state, url){
        state.enteredurl = url;
    }
}

export const actions = {
    updateurl(context, payload){
        context.commit('updateurl', payload);
    },

    updatetokenname(context, payload){
        context.commit('updatetokenname', payload);
    },

    reducetime(context){
        context.commit('reducetime');
    },

    updatevisits(context, payload) {
        context.commit('updatevisits', payload);
    },

    saveshortenedurl(context, payload){
        context.commit('saveshortenedurl', payload);
    },

    saveenteredurl(context, payload){
        context.commit('saveenteredurl', payload);
    }
}