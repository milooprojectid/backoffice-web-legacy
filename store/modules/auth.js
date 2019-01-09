import moment from 'moment';
import Vue from 'vue';
import Listener from '../../utils/listener';

const state = {
  token: null,
  refreshToken: null,
  expiresAt: null
};

const getters = {
  getToken(state) {
    return state.token;
  },
  getRefreshToken(state) {
    return state.refreshToken;
  },
  getExpiresAt(state) {
    return state.expiresAt;
  }
};

const mutations = {
  setToken(state, { token, refreshToken, expiresAt }) {
    state.token = token;
    state.refreshToken = refreshToken;
    state.expiresAt = expiresAt;
  },
  flushToken(state) {
    state.token = null;
    state.refreshToken = null;
    state.expiresAt = null;
  }
};

const actions = {
  logout({ commit }) {
    commit('flushToken');
    this.$router.replace('/login');
  },
  login({ commit }, { token, refreshToken, expiresIn }) {
    const expiresAt = moment()
      .add(expiresIn, 'seconds')
      .format();
    commit('setToken', { token, refreshToken, expiresAt });
    const now = moment().format();
    const diff = moment(expiresAt).diff(moment(now), 'seconds') * 1000;

    /** Auto logout on token expired */
    setTimeout(() => {
      Vue.prototype.$notify({
        title: 'Session expired',
        text: 'logging out now',
        type: 'error',
        group: 'event',
        width: 400
      });
      setTimeout(() => {
        commit('flushToken');
      }, 750);
    }, diff);
    // --

    /** Register listener */
    const listener = new Listener('app');
    listener.bind('notification', inputs => {
      Vue.prototype.$notify({ ...inputs, group: 'event', width: 400 });
    });
    // --

    this.$router.replace('/dashboard');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
