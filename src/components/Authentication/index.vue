<template>
  <div id="login-form" class="container">
    <Login class="ui five wide column"></Login>
  </div>
</template>
<script>
import Login from './_components/Login'
export default {
  components: {
    Login
  }
}
</script>

<style>
#login-form {
  width: 50%;
  min-width: 320px;
}
</style>
