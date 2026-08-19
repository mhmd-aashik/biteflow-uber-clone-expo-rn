import { create } from "zustand";
import { Restaurant } from "../types/restaurant";

type FavoritesStore = {
  restaurants: Restaurant[];

  addRestaurant: (restaurant: Restaurant) => void;
  removeRestaurant: (restaurantId: number) => void;
  isRestaurantFavorite: (restaurantId: number) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  restaurants: [],

  addRestaurant: (restaurant) =>
    set((state) => {
      const alreadyExists = state.restaurants.some(
        (item) => item.id === restaurant.id,
      );

      if (alreadyExists) {
        return state;
      }

      return {
        restaurants: [...state.restaurants, restaurant],
      };
    }),

  removeRestaurant: (restaurantId) =>
    set((state) => ({
      restaurants: state.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId,
      ),
    })),

  isRestaurantFavorite: (restaurantId) =>
    get().restaurants.some((restaurant) => restaurant.id === restaurantId),
}));
