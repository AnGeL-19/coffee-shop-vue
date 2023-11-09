<template>
  <header class="w-100 d-flex justify-content-between px-3 py-2">
    <div>
        <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/vector.svg" width="50" height="50" />
        </RouterLink>     
    </div>
 

    <nav class="d-flex flex-row gap-4 justify-content-center align-items-center">
        <RouterLink to="/" :class="{'active': activeRoute == 'home'}">Coffee</RouterLink>
        <RouterLink to="/cart" :class="{'active': activeRoute == 'cart'}">
            <span class="material-symbols-outlined">
            shopping_cart
            </span>
        </RouterLink>
    </nav>

  </header>
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted } from "vue";
import { useRouter } from "vue-router";


    const route = useRouter()
    const activeRoute = ref()

    onMounted(()=>{
        activeRoute.value = route.currentRoute.value.name
    })

    watch(route.currentRoute, (newRoute) => {
        activeRoute.value = newRoute.name
    })

</script>

<style scoped>
a{
    color: var(--color-text);
    text-decoration: none;
}

a:hover{
    color: var(--color-text-h);
    text-decoration: none;
}

.active{
    color: var(--color-text-h); 
}

</style>