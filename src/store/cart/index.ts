import type { Module } from 'vuex';
import type { StateInterface } from '../index';

import  state,  { type CartState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const cartModule: Module<CartState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default cartModule;