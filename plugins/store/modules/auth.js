import moment from 'moment';
import { ErrorNotification } from '../../../utils/notification';
import router from '../../router';

const states = {
  token: null,
  refreshToken: null,
  expiresAt: null,
  clearance: null,
  region: null
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
  },
  getClearance(state) {
    return state.clearance;
  },
  getRegion(state) {
    return state.region;
  }
};

const mutations = {
  setToken(state, {
    token, refreshToken, expiresAt, clearance
  }) {
    state.token = token;
    state.refreshToken = refreshToken;
    state.expiresAt = expiresAt;
    state.clearance = clearance;
  },
  flushToken(state) {
    state.token = null;
    state.refreshToken = null;
    state.expiresAt = null;
    state.clearance = null;
    state.region = null;
  },
  setProfile(state, { region }) {
    state.region = region;
  }
};

const actions = {
  logout({ commit }) {
    commit('flushToken');
    router.replace('/login');
  },
  login({ commit }, {
    token, refresh_token: refreshToken, expires_in: expiresIn, clearance = 1
  }) {
    const expiresAt = moment().add(expiresIn, 'seconds').format();
    const now = moment().format();

    commit('setToken', {
      token, refreshToken, expiresAt, clearance
    });

    // flush token and redirect
    const diff = moment(expiresAt).diff(moment(now), 'seconds') * 1000;
    setTimeout(() => {
      ErrorNotification({ title: 'Sesi telah berakhir', text: 'silahkan login kembali' });
      setTimeout(() => {
        commit('flushToken');
        router.replace('/login');
      }, 1500);
    }, diff);

    router.replace('/home');
  },
  saveProfile({ commit }, { region }) {
    commit('setProfile', { region });
  }
};

export default {
  state: states,
  getters,
  mutations,
  actions
};
