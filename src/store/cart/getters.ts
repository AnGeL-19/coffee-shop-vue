import type { GetterTree } from 'vuex';
import type { CartState } from './state';
import type { StateInterface } from '../index';


const getters: GetterTree<CartState, StateInterface> = {
    getQuantity(  state: CartState ) {
        // return true;
        return state.quantity
    },
    getProductsCart(  state: CartState ) {
        // return true;
        return state.cart
    },
    getTotal(  state: CartState ) {
        // return true;
        return state.total
    }
}



export default getters;