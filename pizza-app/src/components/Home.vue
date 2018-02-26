<template>
  <div class="container-fluid">
      <div id="home">
          <div class="background  text-center">
              <div>
                   <h1>Pizza name</h1>
                    <button class="btn btn-success" @click="goToMenu">Let's order</button>
              </div>
             
          </div>
      </div>
  </div>
</template>
<script>
export default {
  methods: {
      goToMenu() {
          this.$router.replace('/menu')
      },
  }
}
</script>


<style  lang="scss">
    #home {
        
             background-image: url('../../src/assets/pizza.jpg');
             background-size: cover;
             height: 700px; 
             padding-top: 10%;
        .background {
            background-color: rgba(255,255,255,.7);
            color: #333;
            width: 60%;
            margin:0 auto;
            padding: 2em;
        }
       

    }
</style>
