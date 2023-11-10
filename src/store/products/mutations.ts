import type { MutationTree } from 'vuex';
import type { ProductsState } from './state';
import type { Product } from '@/interfaces/product'

const mutation: MutationTree<ProductsState> = {
    setProducts( state: ProductsState, payload: Product[] ) {
        // a line to prevent linter errors
        state.products = payload
    },
    isLoadingProducts(state: ProductsState, payload: boolean) {
        state.isLoading = payload
    }
}


export default mutation;