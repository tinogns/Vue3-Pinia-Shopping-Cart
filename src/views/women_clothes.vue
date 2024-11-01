<template>
    <div class="loading-screen" v-if="!product_store.load_products">
        <div class="spinner"></div>
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>

    <div class="row mt-2" v-else>
        <div class="col mb-2" style="flex: 0 0 0%;" v-for="(product, index) in list" :key="index">
            <div class="card" style="width: 19rem; height: 25rem;">
                <img :src="product.image" alt="" class="card-img-top mx-auto"
                    style="width: 12rem !important; height: 175px !important; margin-top: 10px;">
                <div class="card-body">
                    <h5 class="card-title" style="height: 50px;">{{ product.title }}</h5>
                    <p class="card-text">{{ product.category }}</p>
                    <p class="card-text">{{ currencyTHB(product.price) }}</p>

                    <div class="display-button">
                        <RouterLink :to="`/product_detail/${product.id}`" class="btn btn-primary mx-2">รายละเอียด
                        </RouterLink>
                        <button class="btn btn-success"
                            @click="cart_store.add_cart(product.id, product.price)">เพิ่มลงตระกล้า</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

//currencyTHB
import { currencyTHB } from '../shared/currency'

//useProductStore
import { useProductStore } from '../store/product';
import { RouterLink } from 'vue-router';
const product_store = useProductStore()

const list = computed(() => product_store.list_products_womenClothing)

//useCartStore
import { useCartStore } from '../store/cart';
const cart_store = useCartStore()

const search_products = computed(() => product_store_electornic.search_products)




</script>

<style>
.card-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.display-button {
    display: flex;
    justify-content: space-evenly;
}

.loading-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ccc;
    border-top-color: #42b983;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>