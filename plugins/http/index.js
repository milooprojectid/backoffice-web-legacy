import store from '@/plugins/store';
import { ErrorNotification } from '@/utils/notification';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.secret = process.env.VUE_APP_API_SECRET;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;

axios.interceptors.request.use((config) => {
  if (store.getters.getToken) config.headers.Authorization = store.getters.getToken;
  return config;
});

axios.interceptors.response.use(
  response => response,
  (error) => {
    const { response } = error;
    if ((response.status === 401 || response.status === 403) && store.getters.getToken) {
      ErrorNotification({ title: 'Unauthorized', text: 'tryin to access restricted resource, logging out..' });
      setTimeout(() => {
        store.dispatch('logout');
      }, 750);
    }
    if (response.status === 500) {
      ErrorNotification({ text: response.message });
    }
    return Promise.reject(error);
  }
);

export default axios;
