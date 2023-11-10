import type { MutationTree } from 'vuex';
import type { CartState } from './state';
import type { Product } from '@/interfaces/product';

const mutation: MutationTree<CartState> = {
    addProductCart(  state: CartState, payload: Product ) {
        // a line to prevent linter errors
        state.cart.unshift(payload);
        state.quantity = state.cart.length;

        state.total += Number(payload.price.slice(1,payload.price.length))
    },
    addAllProductsToCart(  state: CartState, payload: Product[] ) {
        // a line to prevent linter errors
        state.cart = payload;
        state.quantity = payload.length; 
        let total = 0;
        payload.forEach( p => {
            total += Number(p.price.slice(1,p.price.length))
        })
        state.total = total
    },
    increaseQuantityProduct( state: CartState, { product, quantity } : {product: Product ,quantity: number}){

        const total = Number(product.price.slice(1,product.price.length)) * quantity
        state.quantity = state.quantity+quantity;
        state.total +=  total
        
    },
    decreaseQuantityProduct( state: CartState, { product, quantity } : {product: Product ,quantity: number}){

        state.quantity = state.quantity - quantity;
        state.total -= Number( (product.price.slice(1,product.price.length)).toFixed(2) );
    }
}


export default mutation;