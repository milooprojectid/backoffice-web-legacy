<script>
export default {
  fetch({ params, redirect }) {
    redirect(301, '/login');
  }
};
</script>
