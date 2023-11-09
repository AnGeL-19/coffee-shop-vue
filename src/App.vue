<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/shared/Header.vue'

  

</script>

<template>
  
  <Header />
  <RouterView />
</template>

<style scoped>

h1{
  font-size: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
