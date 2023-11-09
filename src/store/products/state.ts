import type { Product } from "@/interfaces/product";

export interface ProductsState {
    isLoading: boolean;
    products: Product[]
}

function state(): ProductsState {
    return {
        isLoading: true,
        products: []
    }
}

export default state;