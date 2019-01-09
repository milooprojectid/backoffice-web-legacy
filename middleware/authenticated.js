export default ({ store, redirect }) => {
  if (!store.getters.getToken) {
    return redirect('/login');
  }
};
