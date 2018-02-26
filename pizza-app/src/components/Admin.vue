<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-lg-6">
            <vue-newPizza> </vue-newPizza>
        </div>
        <div class="col-lg-6">
            <h3>Menù:</h3>
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Remove from menu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Margherita</td>
                        <td> <button class="btn btn-sm btn-danger">x</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <h3>Current orders:</h3>
            <table class="table table-sm">
                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <div class="order-number">
                        <strong> <em>Order Number: 1</em> </strong><button class="btn btn-sm btn-danger ">x</button>
                    </div>
                    <tr>
                        <td>Margherita</td>
                        <td>9"</td>
                        <td>2</td>
                        <td>9.70</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <vue-login></vue-login>
        </div>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
import Login from  './Login.vue'
export default {
  components: {
      'vue-newPizza': NewPizza,
      'vue-login': Login
  }
}
</script>

<style>

</style>
