import type { Module } from 'vuex';
import type { StateInterface } from '../index';

import  state,  { type ProductsState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const productsModule: Module<ProductsState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default productsModule;