<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TinoShop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link " aria-current="page" >หน้าแรก</routerLink>
        </li>
        <li class="nav-item">
          <routerLink to="/cart" class="nav-link" aria-current="page">ตะกล้าสินค้า</routerLink>
        </li>   

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            หมวดหมู่สินค้า
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><routerLink to="/electronics" class="dropdown-item" >อิเล็คทรอนิค</routerLink></li>
            <li><routerLink to="/jewelery" class="dropdown-item" >เครื่องประดับ</routerLink></li>
            <li><routerLink to="/men_clothes" class="dropdown-item" >เสื้อผ้าผู้ชาย</routerLink></li>
            <li><routerLink to="/women_clothes" class="dropdown-item" >เสื้อผ้าผู้หญิง</routerLink></li> 
          </ul>
        </li>
        
      </ul>
      <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="ค้นหาเลย.." aria-label="Search" v-model="product_store.input">
      </div>
    </div>
  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import { useProductStore } from '../store/product';

const product_store = useProductStore()
</script>

<style>

</style>