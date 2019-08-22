export default function({store, redirect}) {
  if (!store.getters['auth/hasToken']) {
    redirect('/login?blog=login')
  }
}