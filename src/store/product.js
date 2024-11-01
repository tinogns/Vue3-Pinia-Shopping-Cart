import { defineStore } from "pinia";

import axios from "axios";

import { ref, computed } from 'vue'

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([])

    const products_category = ref([])

    const products_jewerly = ref([])

    const products_menClothing = ref([])

    const products_womenClothing = ref([])



    const input = ref('')

    const list_products  = computed(() => products.value)

    const load_products = computed(() => products.value.length > 0)

    const list_products_category  = computed(() => products_category.value)

    const list_products_jewerly  = computed(() => products_jewerly.value)

    const list_products_menClothing  = computed(() => products_menClothing.value)

    const list_products_womenClothing  = computed(() => products_womenClothing.value)
  

    const fetch_products = async () => {
        await axios.get(`${import.meta.env.VITE_API}`)
        .then((response) => {
            // console.log(response.data);
            products.value = response.data
        }).catch((err) => {
            console.log(err);
            
        })
    }

    const fetch_products_category_electronics = async () => {
        await axios.get("https://fakestoreapi.com/products/category/electronics")
        .then((response) => {
            // console.log(response.data);
            products_category.value = response.data
        }).catch((err) => {
            console.log(err);
            
        })
    }

    const fetch_products_category_jewelery = async () => {
        await axios.get("https://fakestoreapi.com/products/category/jewelery")
        .then((response) => {
            // console.log(response.data);
            products_jewerly.value = response.data
        }).catch((err) => {
            console.log(err);
            
        })
    }

    const fetch_products_category_clothingMen = async () => {
        await axios.get("https://fakestoreapi.com/products/category/men's clothing")
        .then((response) => {
            // console.log(response.data);
            products_menClothing.value = response.data
        }).catch((err) => {
            console.log(err);
            
        })
    }

    const fetch_products_category_clothingWomen = async () => {
        await axios.get("https://fakestoreapi.com/products/category/women's clothing")
        .then((response) => {
            // console.log(response.data);
            products_womenClothing.value = response.data
        }).catch((err) => {
            console.log(err);
            
        })
    }

    const search_products = computed(() => {
        if(input.value.length < 3) return products.value

        return products.value.filter((prd) => {
            if(prd.title.toLowerCase().includes(input.value.toLowerCase()) == false) {
                return false
            } else {
                return prd.title.toLowerCase().includes(input.value.toLowerCase())
            }
        })
    })

    return {
        products,      
        list_products,
        load_products,
        search_products,
        input,
        list_products_category,   
        list_products_jewerly,
        list_products_menClothing,
        list_products_womenClothing,

        //api
        fetch_products,
        fetch_products_category_electronics,
        fetch_products_category_jewelery,
        fetch_products_category_clothingMen,
        fetch_products_category_clothingWomen
    }
})