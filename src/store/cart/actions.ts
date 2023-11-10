import type { ActionTree } from 'vuex';
import type { CartState } from './state';
import type { StateInterface } from '../index';
import type { Product } from '@/interfaces/product';

const actions: ActionTree<CartState, StateInterface> = {
    addProductCart( { commit }, payload: Product   ) {
        // a line to prevent linter errors

        const cart: Product[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []

        if (cart.find( p => p.id === payload.id)) return;

        const addProduct = [...cart, payload]

        localStorage.setItem('cart', JSON.stringify(addProduct));

        commit('addProductCart', payload);
        
    },
    addAllProductsToCart( { commit } ) {

        const cart: Product[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []
        
        commit('addAllProductsToCart', cart);
    }
}



export default actions;