<template>
    <div class="loading-screen" v-if="!product_store.load_products">
        <div class="spinner"></div>
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
    <div class="row mt-3" v-else>

        <div class="col-md-6">
            <img :src="product.image" alt="" class="img-fluid">
        </div>
        <div class="col-md-6 ">
            <h1>{{ product.title }}</h1>
            <p>
                {{ product.description }}
            </p>
            <h4>{{ currencyTHB(product.price) }}</h4>

            <div class="d-flex mt-5">
                <div class="btn-group me-auto">
                    <button class="btn btn-outline-primary" @click="increment_quantity()">เพิ่มสินค้า</button>
                    <button class="btn btn-outline-primary">{{ quantity }}</button>
                    <button class="btn btn-outline-primary" @click="decrement_quantity()"
                        :disabled="quantity == 0">ลบสินค้า</button>
                </div>
                <button class="btn btn-outline-primary"
                    @click="cart_store.add_cart_detail(product.id, product.price, quantity)">เพิ่มสินค้า</button>
            </div>
        </div>



    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import axios from 'axios';

const product = ref({})

const quantity = ref(1)

//currencyTHB
import { currencyTHB } from '../shared/currency'

//useCartStore
import { useCartStore } from '../store/cart';
const cart_store = useCartStore()

const increment_quantity = () => {
    quantity.value++
}

const decrement_quantity = () => quantity.value--


const route = useRoute()

const load_products = ref(false)

const product_detail = async () => {
    await axios.get(`${import.meta.env.VITE_API}/${route.params.id}`)
        .then((response) => {
            product.value = response.data
            load_products.value = true
        }).catch((err) => {
            console.log(err);

        })
}

onMounted(() => product_detail())

</script>

<style>
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