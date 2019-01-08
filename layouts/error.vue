<template>
  <div class="m-grid__item m-grid__item--fluid m-grid  m-error-1">
    <div v-if="error.statusCode === 404" class="m-error_container">
      <span class="m-error_number">
        <h1 class="m--font-warning">404</h1>			 
      </span> 	
      <p class="m-error_desc m--font-warning">
        OOPS! Page Not Found
      </p>	 
      <nuxt-link class="m-error_desc m--font-grey" to="/dashboard">back to dashboard</nuxt-link>
    </div>
    <div v-else class="m-error_container">
      <span class="m-error_number">
        <h1 class="m--font-danger">500</h1>			 
      </span> 	
      <p class="m-error_desc m--font-danger">
        OOPS! Something went wrong here
      </p>	 
      <nuxt-link class="m-error_desc m--font-grey" to="/dashboard">back to dashboard</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: () => ({
        statusCode: 404
      })
    }
  },
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
