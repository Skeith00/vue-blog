<template>
  <div>
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
      <h1 v-for="post in this.$parent.items">{{ post.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to My Vue.js Blog'
    }
  }
}
</script>
