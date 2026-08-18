import { create } from "zustand";
import { CartItem } from "../types/cart";
import { Product } from "../types/product";

type CartStore = {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (product, quantity) =>
   set((state) => ({
     items: [
       ...state.items,
       {
         product,
         quantity,
       },
     ],
   })),
}));
