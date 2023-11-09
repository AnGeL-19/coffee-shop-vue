import type { ActionTree } from 'vuex';
import type { ProductsState } from './state';
import type { StateInterface } from '../index';
import productApi from '@/api/productApi';
import type { Product } from '@/interfaces/product';


const actions: ActionTree<ProductsState, StateInterface> = {
    async getProducts( { commit } ) {
        // a line to prevent linter errors

        try {
            
            const { data } = await productApi.get<Product[]>('')

            console.log(data);
            commit('setProducts', data);

        } catch (error) {
            console.log(error);
            
        }finally{
            commit('isLoadingProducts')
        }
        

    }
}



export default actions;