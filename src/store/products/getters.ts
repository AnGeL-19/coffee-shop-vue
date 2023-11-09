import type { GetterTree } from 'vuex';
import type { ProductsState } from './state';
import type { StateInterface } from '../index';


const getters: GetterTree<ProductsState, StateInterface> = {
    getAllProducts(  state: ProductsState  ) {
        // return true;
        return state.products
    },
    getProductsByTab(  state: ProductsState ) {
        return (tab: string) => {
            switch (tab) {
                case 'all': return state.products
                case 'avaible': return state.products.filter( product => product.available )
            }
        }  
    },
    isLoadingProducts(  state: ProductsState  ) {
        // return true;
        return state.isLoading
    }
}



export default getters;