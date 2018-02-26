<template>
  <div id="app">
    <div class="container">
      <vue-header></vue-header>
    </div>
     <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <router-view name="contact"></router-view>
        </div>
        <div class="col-lg-3">
          <router-view name="login"></router-view>
        </div>
        <div class="col-lg-3">
          <router-view name="about"></router-view>
        </div>
      </div>
      
    </div>
     <div class="container">
      <vue-footer></vue-footer>
    </div>
  </div>
</template>

<script>
import Header from  './components/Header.vue'
import Footer from  './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'vue-header': Header,
    'vue-footer': Footer,

  }
}
</script>

<style lang="scss">
</style>
