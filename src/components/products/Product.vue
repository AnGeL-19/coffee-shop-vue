<script setup lang="ts"></script>

<template>
  <article class="card-product col">
    <div class="w-100 position-relative mb-3">
      <img
        class="w-100 h-100 rounded-3"
        src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"
        alt=""
      />
      <span class="popular" >Popular</span>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <h3 class="txt-card">Cappuccino</h3>
        <div class="d-flex justify-content-between align-items-center gap-1">
          <div class="d-flex justify-content-between align-items-center">
            <img
              alt="Vue logo"
              class="logo"
              src="@/assets/Star_fill.svg"
              width="20"
              height="20"
            />
          </div>
          <span class="txt-card">4.7</span>
          <span class="txt-card votes">(65 votes)</span>
        </div>
      </div>
      <div>
        <span class="price rounded-1">$5.20</span>
      </div>
    </div>
  </article>
</template>

<style scoped>

.card-product{
    max-width: 250px;
    padding: 0 12px 20px ;
}

.txt-card{
    font-size: .75rem;
}

.price{
    padding: 4px 10px;
    background-color: var(--vt-c-green);
    font-size: .75rem;
    font-weight: 600;
    color: var(--color-text-black);
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
