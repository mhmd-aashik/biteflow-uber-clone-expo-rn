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
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                }
              : item,
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            product,
            quantity,
          },
        ],
      };
    }),
}));
