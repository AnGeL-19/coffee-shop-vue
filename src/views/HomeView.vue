<script setup lang="ts">
import ProductVue from "../components/products/Product.vue";



</script>

<template>
  <main class="">
    <div class="bg-image">
      <img 
        class="w-100 h-100"
        src="../assets/bg-cafe.jpg" 
        alt="coffee">
    </div>
    
    <div class="container-sp d-flex justify-content-center align-items-center">
      <div class="section-sp py-3 px-5 z-1">
        <div class="d-flex flex-column justify-content-center align-items-center">

          <header class="heading d-flex flex-column justify-content-center align-items-center position-relative">
            <h1>Our Collection</h1>
            <div class="">
              <img alt="Vue logo" class="vector" src="@/assets/vector.svg"  />
            </div>
            <p class="text-center">
              Introducing our Coffee Collection, a selection of unique coffees from different 
              roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
          </header>

          <div class="d-flex gap-3">
            <button class="btn btn-filter-active">All Products</button>
            <button class="btn btn-filter">Available Now</button>
          </div>
         
          <section class="section-container  container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-4">
              <ProductVue/>
              <ProductVue/>
              <ProductVue/>
              <ProductVue/>
              <ProductVue/>
              <ProductVue/>
            </div>
            

          </section>

        </div>  
      </div>
   </div>

  </main>
</template>

<style scoped>

.bg-image{
  position: absolute;
  left: 0;
  z-index: -99;
}

.heading{
  width: 50%;
  padding-top: 50px;
}

.container-sp{
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  min-height: 100vh;
}
.section-sp{
  background-color: var(--color-background-soft);
  border-radius: 15px;
  max-width: 60%;
  max-width: 80%;
}

.section-container{
  padding-top: 20px;
  
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
