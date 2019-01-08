export default function({ store, redirect }) {
  if (!store.getters.getToken) {
    return redirect('/login')
  }
}
