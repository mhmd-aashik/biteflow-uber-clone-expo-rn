import { create } from "zustand";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

type CartStore = {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItem: (productId: number) => void;
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

  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    })),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),
}));
