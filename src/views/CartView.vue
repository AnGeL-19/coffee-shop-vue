<script setup lang="ts">
import Vue from 'vue'
import ProductCart from '../components/products/ProductCart.vue'
import { useCart } from '../composable/useCart'



const { cart, total, quantity, payProducts } = useCart()


</script>

<template>
  <main class="cart">
    <h1>Product Cart</h1>

    <div class="d-flex justify-content-between">

      <section class="d-flex flex-column gap-4">

       <ProductCart v-for="product of cart" :key="product.id" :product="product" />

      </section>
      
      <section class="d-flex flex-column w-25 text-center gap-3">
        <h3 class="fs-1">Total</h3>
        <div>
          <div class="d-flex fle justify-content-between">
            <p class="fs-4">Products</p>
            <span class="fs-4">{{ quantity }}</span>
          </div>
          <hr>
          <div class="d-flex fle justify-content-between">
            <p class="fs-4">Total</p>
            <span class="fs-3">${{ total }}</span>
          </div>
        </div>
        <button 
          @click="payProducts"
          :class="quantity !== 0 ? 'btn btn-success': 'btn btn-disabled'"
          :disabled="quantity==0"
        >
          Pay
        </button>
      </section>

    </div>

  </main>
</template>

<style scoped>

.txt-card{
  font-size: .875rem;
  font-weight: 600;
  margin: 0;
}

</style>
