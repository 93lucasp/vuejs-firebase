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
                  <tbody v-for="item in getMenuItems">
                      <tr>
                          <td>{{item.name}}</td>
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
                <button class="btn btn-success w-100">Order</button>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        basket: [],
        totalPrice: 0,
      getMenuItems: {
          1: {
              name: 'Margherita',
              description: 'A delcious margheritaaaa made by hands',
              options: [{
                  size: 9,
                  price: 7.96
              },
              {
                  size: 12,
                  price: 12.95
              }]
          },
          2: {
              name: 'Tedesca',
              description: 'A delcious margheritaaaa made with patatos',
              options: [{
                  size: 9,
                  price: 7.96
              },
              {
                  size: 12,
                  price: 12.95
              }]
          },
          3: {
              name: '4 formaggi',
              description: 'A delcious margheritaaaa with 4 cheese',
              options: [{
                  size: 9,
                  price: 7.96
              },
              {
                  size: 12,
                  price: 12.95
              }]
          }
      }
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
      }
  }
}
</script>
<style  lang="scss">
   
</style>
