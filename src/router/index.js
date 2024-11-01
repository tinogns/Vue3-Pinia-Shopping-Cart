import { createRouter, createWebHistory } from 'vue-router'

//หน้าแรก
import home_products from '../views/home_products.vue'
import product_detail from '../views/product_detail.vue'
import cart_cart from '../views/cart_cart.vue'
import electronics from '../views/electronics.vue'
import jewelery from '../views/jewelery.vue'
import men_clothes from '../views/men_clothes.vue'
import women_clothes from '../views/women_clothes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home_products',
      component: home_products
    },
    {
        path: '/product_detail/:id',
        name: 'product_detail',
        component: product_detail
      },
      {
        path: '/cart',
        name: 'cart_cart',
        component: cart_cart
      },
      {
        path: '/electronics',
        name: 'electronics',
        component: electronics
      },
      {
        path: '/jewelery',
        name: 'jewelery',
        component: jewelery
      },
      {
        path: '/men_clothes',
        name: 'men_clothes',
        component: men_clothes
      },
      {
        path: '/women_clothes',
        name: 'women_clothes',
        component: women_clothes
      },
  
  ]
})

export default router