import type { Product } from "@/interfaces/product";

export interface CartState {
    cart: Product[];
    quantity: number;
    total: number;
}

function state(): CartState {
    return {
        cart: [],
        quantity: 0,
        total: 0
    }
}

export default state;