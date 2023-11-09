<script setup lang="ts">

  
  const { product } = defineProps({
    product: {
      type: Object,
      required: true
    }
  })


</script>

<template>
  <article class="card-product col">
    <div class="w-100 position-relative mb-3">
      <img
        class="w-100 h-100 rounded-3"
        :src="product.image ? product.image : 'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg' "
        :alt="product.name"
      />
      <span v-show="product.popular" class="popular" >Popular</span>
    </div>
    <div class="d-flex flex-column gap-2">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="txt-card">{{ product.name }}</h3>
        <div>
          <span class="price rounded-1">{{ product.price }}</span>
        </div>
        
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-row gap-1">
          <div>
              <img
                alt="Star"
                class="star"
                :src="product.votes === 0 ? '/src/assets/Star.svg' : '/src/assets/Star_fill.svg'"
                width="20"
                height="20"
              />
            </div>
            <div class="d-flex gap-1 align-items-center justify-content-center">
              <span :v-show="product.votes !== 0" class="txt-card">{{ product.rating }}</span>
              <span class="txt-card votes">{{ product.votes != 0 ?  `( ${product.votes} votes )` : 'No rating' }}</span>
            </div> 
        </div> 
        <div v-show="!product.available">
          <span class="label">Sould out</span>
        </div>  
      </div>
         
       
    </div>
  </article>
</template>

<style scoped>

.card-product{
    max-width: 250px;
    min-width: 250px;
    padding: 0 12px 20px ;
}

.txt-card{
  font-size: .875rem;
  font-weight: 600;
  margin: 0;
}

.price{
    padding: 4px 8px;
    background-color: var(--vt-c-green);
    font-size: .75rem;
    font-weight: 600;
    color: var(--color-text-black);
    text-align: center;
}

.label{
  color: var(--vt-c-orange);
  font-size: .875rem;
}

.star{
  margin-top: -3px;
}

.votes{
    color: var(--color-text-gray);

}

.popular{
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: var(--vt-c-yellow);
    color: var(--color-text-black);
    padding: 2px 10px; 
    border-radius: 15px;
    font-size: .625rem;
    font-weight: 600;
}


</style>
