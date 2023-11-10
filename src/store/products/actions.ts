import type { ActionTree } from 'vuex';
import type { ProductsState } from './state';
import type { StateInterface } from '../index';
import productApi from '@/api/productApi';
import type { Product } from '@/interfaces/product';


const actions: ActionTree<ProductsState, StateInterface> = {
    async getProducts( { commit } ) {
        // a line to prevent linter errors

        try {
            commit('isLoadingProducts', true)
            const { data } = await productApi.get<Product[]>('')

            commit('setProducts', data);

        } catch (error) {
            console.log(error);
            commit('setProducts', []);
        }finally{
            commit('isLoadingProducts',false);
            
        }
        

    }
}



export default actions;