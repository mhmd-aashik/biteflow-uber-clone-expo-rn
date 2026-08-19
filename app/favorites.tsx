import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useFavoritesStore } from "../store/favorites.store";
import { Screen } from "../components/ui/Screen";
import { RestaurantCard } from "../components/restaurant/RestaurantCard";
import { FavoritesEmptyState } from "../components/favorites/FavoritesEmptyState";

export default function FavoritesScreen() {
  const restaurants = useFavoritesStore((state) => state.restaurants);

  if (restaurants.length === 0) {
    return (
      <Screen>
        <View className="h-16 flex-row items-center px-5">
          <Pressable
            onPress={() => router.back()}
            className="h-11 w-11 items-center justify-center rounded-full bg-white"
          >
            <Ionicons name="arrow-back" size={22} color="#171717" />
          </Pressable>

          <Text className="ml-4 text-2xl font-bold text-text-primary">
            Favorites
          </Text>
        </View>

        <FavoritesEmptyState />
      </Screen>
    );
  }

  return (
    <Screen>
      <View className="h-16 flex-row items-center px-5">
        <Pressable
          onPress={() => router.back()}
          className="h-11 w-11 items-center justify-center rounded-full bg-white active:opacity-80"
        >
          <Ionicons name="arrow-back" size={22} color="#171717" />
        </Pressable>

        <Text className="ml-4 text-2xl font-bold text-text-primary">
          Favorites
        </Text>
      </View>

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
