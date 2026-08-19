import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useFavoritesStore } from "../store/favorites.store";
import { Screen } from "../components/ui/Screen";
import { RestaurantCard } from "../components/restaurant/RestaurantCard";
import { FavoritesEmptyState } from "../components/favorites/FavoritesEmptyState";
import { FavoritesHeader } from "../components/favorites/FavoritesHeader";

export default function FavoritesScreen() {
  const restaurants = useFavoritesStore((state) => state.restaurants);

  if (restaurants.length === 0) {
    return (
      <Screen>
        <FavoritesHeader />
        <FavoritesEmptyState />
      </Screen>
    );
  }

  return (
    <Screen>
      <FavoritesHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-10 pt-4"
      >
        <View className="gap-5">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
