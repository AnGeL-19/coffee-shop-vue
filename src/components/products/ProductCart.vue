<template>
   <article class="product-cart  rounded-2">
        <div class="w-100">
        <img 
            class="w-100 h-100 rounded-2"
            :src="product.image" 
            alt=""
        >
        </div>
        <div class="d-flex p-1 justify-content-between">
        <div>
            <p class="txt-card">Cappuccino</p>
            <span class="">{{ product.price }}</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-4">
            <button 
            @click="onDecrease()"
            class="btn px-3 py-1 rounded-4 border-1 border-white">
                -1
            </button>
            <span class="fs-5">{{ quantity }}</span>
            <button 
            @click="onIncrease()"
            class="btn px-3 py-1 rounded-4 border-1 border-white">
                +1
            </button>
        </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCart } from "../../composable/useCart";

const { increaseProduct, decreaseProduct } = useCart()

const { product } = defineProps({
    product: {
      type: Object,
      required: true
    }
})
    const quantity = ref(1)

    const onIncrease = () => {
        const increase = quantity.value++;
        increaseProduct(product, increase)
    }
    const onDecrease = () => {
        const decrease = quantity.value--;
        decreaseProduct(product, decrease)
    }

</script>

<style scoped>
.product-cart{
  min-width: 300px;
}
</style>