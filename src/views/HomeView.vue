<script setup lang="ts">
import { ref } from "vue";
import Product from "../components/products/Product.vue";
import { useProducts } from '@/composable/useProducts'
import type { Product as IProduct } from "../interfaces/product";

  const { currentTab, isLoadingProducts, productsByTab: products } = useProducts()

  const onActive = (value:string) => {
    return value === currentTab.value ? 'btn btn-filter-active' : 'btn btn-filter' 
  }

</script>

<template>
  <main class="main-container">
    <div class="bg-image">
      <img 
        class="image"
        src="../assets/bg-cafe.jpg" 
        alt="coffee">
    </div>
    
    <div class="container-sp d-flex justify-content-center ">
      <div class="section-sp py-4 px-5 z-1">
        <div class="d-flex flex-column justify-content-center align-items-center">

          <header class="heading d-flex flex-column justify-content-center align-items-center position-relative">
            <h1>Our Collection</h1>
            <div class="overflow-hidden">
              <img alt="Vue logo" class="vector" src="@/assets/vector.svg"  />
            </div>
            <p class="text-center">
              Introducing our Coffee Collection, a selection of unique coffees from different 
              roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
          </header>

          <div class="d-flex gap-3">
            <button 
              :class="onActive('all')"
              @click="currentTab = 'all'"
            >All Products</button>
            <button 
              :class="onActive('avaible')"
              @click="currentTab = 'avaible'"
            >
              Available Now
            </button>
          </div>
         
          <section class="section-container container">

            <div v-if="isLoadingProducts"
              class="alert alert-info text-center"
            >
              <span>Loading...</span>
            </div>
            <div v-else
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-4">
              <Product v-for="product of products" :key="product.id" :product="product" />
            </div>    

          </section>

        </div>  
      </div>
   </div>

  </main>
</template>

<style scoped>



.main-container{
  padding-bottom: 50px;
}

.bg-image{
  position: absolute;
  width: 100%;
  
  left: 0;
  z-index: -99;
}

.image{
  width: 100%;
  min-height: 270px;
  object-fit: cover;
}

.heading{
  max-width: 500px;
  padding-top: 50px;
}

.container-sp{
  position: absolute;
  top: 210px;
  left: 0;
  width: 100%;
  min-height: 100vh;
 
}
.section-sp{
  background-color: var(--color-background-soft);
  border-radius: 15px;
  max-width: 60%;
  max-width: 80%;
  margin-bottom: 50px;
}

.section-container{
  padding-top: 40px;
  
}

.vector{
  position: absolute;
  top: 0;
  right: 0;
  z-index: -9;
}

p{
  color: var(--color-text-gray);
  font-size: 1rem;
  
}

.btn-filter-active{
  background-color: var(--vt-c-gray);
  font-weight: 600;
  color: var(--color-text)
}

.btn-filter{
  color: var(--color-text)
}

</style>
