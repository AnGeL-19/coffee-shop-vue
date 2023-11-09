import { onMounted, computed, ref } from 'vue'
import { useStore } from "vuex"



export const useProducts = () => {

    const store = useStore()
    
    const currentTab = ref('all')

    onMounted(() => {
        store.dispatch('products/getProducts');
    })

    const products =  computed(()=>store.getters['products/getAllProducts'])
    const isLoadingProducts = computed(()=>store.getters['products/isLoadingProducts'])
    const productsByTab = computed(()=>store.getters['products/getProductsByTab'](currentTab.value))

    return{
        products,
        isLoadingProducts,
        productsByTab,
        currentTab
    }

}