import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Restaurant } from "../types/restaurant";

type FavoritesStore = {
  restaurants: Restaurant[];

  addRestaurant: (restaurant: Restaurant) => void;
  removeRestaurant: (restaurantId: number) => void;
  toggleRestaurant: (restaurant: Restaurant) => void;
  isRestaurantFavorite: (restaurantId: number) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
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

      toggleRestaurant: (restaurant) =>
        set((state) => {
          const alreadyFavorite = state.restaurants.some(
            (item) => item.id === restaurant.id,
          );

          if (alreadyFavorite) {
            return {
              restaurants: state.restaurants.filter(
                (item) => item.id !== restaurant.id,
              ),
            };
          }

          return {
            restaurants: [...state.restaurants, restaurant],
          };
        }),

      isRestaurantFavorite: (restaurantId) =>
        get().restaurants.some((restaurant) => restaurant.id === restaurantId),
    }),
    {
      name: "biteflow-favorites",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
