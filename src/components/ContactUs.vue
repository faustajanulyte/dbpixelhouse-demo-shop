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
    <div style="height: 400px;" class="d-flex justify-content-center align-items-center text-dark display-1">Sorry... Temporarily out of service</div>
    </div>
</template>

<script>

</script>

<style>

</style>