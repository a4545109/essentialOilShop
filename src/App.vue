<template>
  <div id="app">
      <Toast></Toast>
      <router-view/>
  </div>
</template>
<script>
import Toast from '@/components/Toasts.vue'
export default {
  name: 'APP',
  components: {
    Toast
  }
}
</script>

<style lang="scss">
@import './assets/sass/main';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
