<template>
  <div class="container-fluid" v-if="currentUser">
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
                <tbody v-for="item in getMenuItems" >
                    <tr >
                        <td>{{item.name}}</td>
                        <td> <button class="btn btn-sm btn-danger" @click="removeMenuItem(item['.key'])">x</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <h3>Current orders: {{numberOfOrders}}</h3>
            <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
                <thead class="thead-default" >
                    <tr>
                        <th>Item</th>
                        <th>size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <div class="order-number">
                        <strong> <em>Order Number: {{ index + 1 }}</em> </strong><button class="btn btn-sm btn-danger " @click="removeOrderItem(orders['.key'])">x</button>
                    </div>
                    <tr v-for="order in orders['.value']">
                        <td>{{order.name}}</td>
                        <td>{{order.size}}</td>
                        <td>{{order.quantity}}</td>
                        <td>{{order.price}}</td>
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
import { mapGetters } from 'vuex'
import { dbMenuRef } from '../firebaseConfig'
import { dbOrdersRef } from '../firebaseConfig'
export default {
  components: {
      'vue-newPizza': NewPizza,
      'vue-login': Login
  },
   computed: {
       ...mapGetters ([
           'numberOfOrders',
           'getOrders',
           'getMenuItems',
           'currentUser'
       ])
  },
  beforeRouteLeave: (to, from, next) => {
      if(confirm("have you logout") === true) {
          next();
      }
      else {
          next(false);
      }
  },
  methods: {
      removeMenuItem(key) {
          dbMenuRef.child(key).remove()
      },
      removeOrderItem(key) {
          dbOrdersRef.child(key).remove()
      }
  }
}
</script>

<style>

</style>
