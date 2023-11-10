import { onMounted, computed } from 'vue'
import { useStore } from "vuex"
import type { Product } from "@/interfaces/product"
// import { useStore } from "vuex/types/index.js"


export const useCart = () => {

    const store = useStore()
    
    onMounted(() => {
        store.dispatch('cart/addAllProductsToCart')
    })

    const addProduct = (product: Product) => store.dispatch('cart/addProductCart', product)
    const cart = computed( () => store.getters['cart/getProductsCart'] )
    const quantity = computed( () => store.getters['cart/getQuantity'] )
    const total = computed( () => store.getters['cart/getTotal'] )
    const increaseProduct = (product: Product, quantity: number) => store.commit('cart/increaseQuantityProduct', {  product, quantity })
    const decreaseProduct = (product: Product, quantity: number) => store.commit('cart/decreaseQuantityProduct', {  product, quantity })

    return{
        addProduct,
        cart,
        quantity,
        total,
        increaseProduct,
        decreaseProduct
    }

}