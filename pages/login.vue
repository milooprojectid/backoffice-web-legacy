<template>
  <div class="m-grid m-grid--hor m-grid--root m-page">
    <div id="m_login" :style="{ backgroundImage: 'url('+ require('@/assets/img/bg/login.jpg') +')' }" class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2">
      <div class="m-grid__item m-grid__item--fluid	m-login__wrapper">
        <div class="m-login__container">
          <div class="m-login__logo">
            <a href="#">
              <img src="@/assets/img/logo.png" style="height: 150px">  	
            </a>
          </div>
          <div class="m-login__signin">
            <form class="m-login__form m-form" action="">
              <div class="form-group m-form__group">
                <input class="form-control m-input" type="text" placeholder="Username" name="username">
              </div>
              <div class="form-group m-form__group">
                <input class="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password">
              </div>
              <div class="row m-login__form-sub">
                <div class="col m--align-left m-login__form-left">
                  <label class="m-checkbox  m-checkbox--focus">
                    <input type="checkbox" name="remember"> Remember me
                    <span/>
                  </label>
                </div>
              </div>
              <div class="m-login__form-action">
                <button id="m_login_signin_submit" class="text-white btn m-btn--gradient-from-warning m-btn--gradient-to-danger m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary btn-block">Sign In</button>
              </div>
            </form>
          </div>
        </div>	
      </div>
    </div>
    <notifications :max="10" group="login" position="bottom center" />		
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data: () => ({
    user: {
      username: null,
      password: null
    },
    loading: false
  }),
  methods: {
    login() {
      if (this.user.username && this.user.password) {
        this.loading = true;
        this.$http
          .post('/login', this.user)
          .then(res => {
            this.$store.dispatch('login', res.data.content);
          })
          .catch(err => {
            this.loading = false;
            this.user.password = null;
            this.$notify({
              type: 'error',
              title: 'Whoops',
              text: 'invalid credential',
              group: 'event',
              width: 900
            });
          });
      }
    }
  },
  head: {
    bodyAttrs: {
      class:
        'm--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default'
    }
  }
};
</script>

<style>
</style>
