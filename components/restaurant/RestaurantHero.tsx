import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";
import { Restaurant } from "../../types/restaurant";
import { useFavoritesStore } from "../../store/favorites.store";

type Props = {
  restaurant: Restaurant;
};

export function RestaurantHero({ restaurant }: Props) {
  const restaurants = useFavoritesStore((state) => state.restaurants);

  const toggleRestaurant = useFavoritesStore((state) => state.toggleRestaurant);

  const isFavorite = restaurants.some((item) => item.id === restaurant.id);
  return (
    <View className="relative">
      <Image
        source={{ uri: restaurant.image }}
        className="h-72 w-full"
        resizeMode="cover"
      />

      <Pressable
        onPress={() => router.back()}
        className="absolute left-5 top-5 h-11 w-11 items-center justify-center rounded-full bg-black/40 active:opacity-80"
      >
        <Ionicons name="arrow-back" size={22} color="#FFFFFF" />{" "}
      </Pressable>

      <Pressable
        onPress={() => toggleRestaurant(restaurant)}
        className="absolute right-5 top-5 h-11 w-11 items-center justify-center rounded-full bg-black/40 active:opacity-80"
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={22}
          color={isFavorite ? "#FF5A36" : "#FFFFFF"}
        />
      </Pressable>
    </View>
  );
}
