import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import ShoppingCart from '@/components/ShoppingCart'
import ContactUs from '@/components/ContactUs'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/ShoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart
        },
        {
            path: '/ContactUs',
            name: 'ContactUs',
            component: ContactUs
        }
    ]
})