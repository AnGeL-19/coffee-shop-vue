import { createStore } from 'vuex';
import type { ProductsState } from './products/state';
import productsModule from './products';
import type { CartState } from './cart/state';
import cartModule from './cart';

// My custom modules
// import exampleModule from './module-template';
// import type { ExampleStateInterface } from './module-template/state';

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  products: ProductsState,
  cart: CartState
}

export default createStore<StateInterface>({
  modules: {
    products: productsModule,
    cart: cartModule
  }
})