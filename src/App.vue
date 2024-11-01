<template>
  
  <navbar_product />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import navbar_product from './components/navbar_product.vue';

// useProductStore
import { useProductStore } from './store/product';
const product_store = useProductStore()
const product_store_electornic = useProductStore()
const product_store_jewerly = useProductStore()
const product_store_menClothes = useProductStore()
const product_store_womenClothes = useProductStore()



// useCartStore
import { useCartStore } from './store/cart';
const cart_store = useCartStore()

onMounted(() => product_store.fetch_products())
onMounted(() => cart_store.loadFromLocalStorage())
onMounted(() => product_store_electornic.fetch_products_category_electronics())
onMounted(() => product_store_jewerly.fetch_products_category_jewelery())
onMounted(() => product_store_menClothes.fetch_products_category_clothingMen())
onMounted(() => product_store_womenClothes.fetch_products_category_clothingWomen())



</script>

<style></style>