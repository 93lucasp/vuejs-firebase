<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 col-md-6">
              <table class="table table-hover">
                  <thead class="thead-default">
                      <tr>
                          <th>Size</th>
                          <th>Price</th>
                          <th>add to basket </th>
                      </tr>
                  </thead>
                  <tbody v-for="item in getMenuItems" :key="item['.key']">
                      <tr>
                          <td>{{item.name}}</td>
                          <img :src="item.photo" alt="">
                      </tr>
                      <tr v-for="option in item.options">
                          <td>{{option.size}}</td>
                          <td>{{option.price}}</td>
                          <td><button class="btn btn-sm btn-outline-success" type="button" @click="addToBasket(item,option)">+</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="col-12 col-md-6" >
              <div v-if="basket.length > 0">              
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total </th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket">
                        <tr>
                            <td> <button class="btn btn-small btn-danger" @click="decreaseQuantity(item)">-</button> <span> {{item.quantity}} </span> <button class="btn btn-small btn-success" @click="increaseQuantity(item)">+</button> </td>
                            <td>{{item.name}} {{item.size}}</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                order total: {{totalPrice}}
                <button class="btn btn-success w-100" @click="addNewOrder">Order</button>
            </div>
            <div v-else>
                <p>{{basketText}} </p>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { dbOrdersRef } from '../firebaseConfig'
export default {
    
  name: 'app',
  data () {
    return {
        basket: [],
        totalPrice: 0,
        basketText: 'None orders'
      
    }
  },
  computed: {
      ...mapGetters ([
           'getMenuItems'
       ]),
       total() {
           var totalCost = 0;
           for( var items in this.basket) {
               var individualItem = this.basket[items];
               totalCost += individualItem.quantity * individualItem.price
           }
           return totalCost;
       }
  },
  methods: {
      addToBasket(item, option) {
          this.basket.push(
              {
                  name: item.name,
                  price: option.price,
                  size: option.size,
                  quantity: 1
              }
          )
          this.totalPrice += option.price;
      },
      removeFromBasket(item) {
          this.basket.splice(this.basket.indexOf(item), 1);
      },
      increaseQuantity(item) {
          item.quantity++;
          this.totalPrice += item.price;
      },
      decreaseQuantity(item) {
          item.quantity--;
           this.totalPrice -= item.price;
          if( item.quantity === 0) {
              this.removeFromBasket(item)
          }
      },
      addNewOrder() {
        //   this.$store.commit('addOrder', this.basket);
          dbOrdersRef.push(this.basket)
          this.basket = [];
          this.basketText = "order added"
      }
  }
}
</script>
<style  lang="scss">
   
</style>
