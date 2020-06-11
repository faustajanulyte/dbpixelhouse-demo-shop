<template>
  <div>
      <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <form @click="$router.push('/')">
                    <b-nav-item class="font-weight-bold">Home</b-nav-item>
                </form>
                <form @click="$router.push('Shop')">
                    <b-nav-item class="font-weight-bold">Shop</b-nav-item>
                </form><form @click="$router.push('ShoppingCart')">
                    <b-nav-item class="font-weight-bold">Shopping Cart</b-nav-item>
                </form>
            </b-navbar-nav>
        </b-navbar>
        <div style="height: 200px;" class="d-flex justify-content-center align-items-center text-dark display-4">These are our products</div>
        <div class="product list">
            <div class="row d-flex justify-content-center align-items-center" v-for="products in groupedProducts" :key="products">
                <div v-for="product in products" :key="product.id" class="col-3 my-4 mx-4">
                    <Product :product="product"/>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Product from './Product'

import _ from 'lodash'
import products from '../assets/products.json'

export default {
  name: 'Shop',
  components: {
    Product
  },
  data() {
      return {
          products: products
      }
  },
  computed: {
      groupedProducts() {
          return _.chunk(products, 3)
      }
  }
}
</script>

<style>
.row {
    margin: 0!important;
}
</style>