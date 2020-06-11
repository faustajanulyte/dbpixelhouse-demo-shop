<template>
    <div>
        <div style="height: 400px;" class="d-flex justify-content-center align-items-center text-dark display-1">Welcome to the shop</div>
        <div class="services">
        <router-link class="router-link" to="/Shop">
          <div class="img-block mx-3 col-3 ">
            <h1 class="text-dark mb-4">Shop</h1>
              <a class="services-icon">
                <img src="@/assets/supermarket.svg"  class="img-fluid" alt="shop" />
              </a>
          </div>
        </router-link>
        <router-link class="router-link" to="/ShoppingCart">
          <div class="img-block mx-3 col-3">
            <h1 class="text-dark mb-4">Shopping Cart</h1>
              <a class="services-icon">
                <img src="@/assets/shopping-bag.svg" class="img-fluid" alt="shopping cart" />
              </a>
          </div>
        </router-link>
        <router-link class="router-link" to="/ContactUs">
          <div class="img-block mx-3 col-3">
            <h1 class="text-dark mb-4">Contact us</h1>
              <a class="services-icon">
                <img src="@/assets/comment.svg" class="img-fluid" alt="contact" />
              </a>
          </div>
        </router-link>
    </div>
    </div>
</template>

<script>

</script>

<style scoped>
body {
    width: 100%;
    height: 100%;
    background-color: white;
    background-size: 100%;
    margin: 0px;
}
.img-block {
  display: inline-block;
  position: relative;
  text-align: center;
  padding-top: 20px;
}
.router-link:hover {
  opacity: 0.7;
}
.img-block h1 {
  color: black;
  text-align: center;
}
.container {
  border-radius: 25px;
}
img {
    width: 200px;
    height: auto;
}
</style>
