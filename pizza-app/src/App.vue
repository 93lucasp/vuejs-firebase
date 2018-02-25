<template>
  <div id="app">
    <div class="container">
      <vue-header></vue-header>
    </div>
     <div class="container">
      <vue-admin></vue-admin>
    </div>
     <div class="container">
      <vue-footer></vue-footer>
    </div>
  </div>
</template>

<script>
import Header from  './components/Header.vue'
import Footer from  './components/Footer.vue'
import Home from  './components/Home.vue'
import Menu from  './components/Menu.vue'
import Admin from  './components/Admin.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'vue-header': Header,
    'vue-footer': Footer,
    'vue-home': Home,
     'vue-menu': Menu,
     'vue-admin': Admin,

  }
}
</script>

<style lang="scss">
</style>
