<template>
  <header class="row">
      <nav class="navbar">
          <a href="/" class="navbar-brand">Pizza</a>
          <ul class="nav">
                  <router-link :to="{name: 'homeLink'}" tag="li">
                    <a class="nav-link">Home</a>
                  </router-link>
                  <router-link :to="{name: 'menuLink'}" tag="li">
                     <a class="nav-link">Menu</a>
                  </router-link>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
  data() {
      return {
          
      }
  }
}
</script>

<style lang="scss">
header {
    padding: 1em;
    a {
        color: #333;
    }
}

</style>

