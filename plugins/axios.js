export default ({ $axios: axios, store }) => {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['secret'] = process.env.API_SECRET;
  axios.defaults.baseURL = process.env.BASE_URL;

  axios.interceptors.request.use(config => {
    if (store.getters.getToken) config.headers.token = store.getters.getToken;
    return config;
  });

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 400) {
        // Vue.prototype.$notify({
        //   group: 'event',
        //   title: 'Unauthorized',
        //   text: 'Logging out now',
        //   type: 'error'
        // })
        setTimeout(() => {
          store.dispatch('logout');
        }, 750);
      }

      if (error.response.status === 500) {
        console.log('internal server error');
        // Vue.prototype.$notify({
        //   group: 'event',
        //   title: 'Internal Server Error',
        //   type: 'error'
        // })
      }
      return Promise.reject(error.response);
    }
  );
};
