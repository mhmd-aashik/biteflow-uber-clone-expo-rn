import { View } from "react-native";
import { ProfileMenuItem } from "./ProfileMenuItem";
import { router } from "expo-router";
import { useFavoritesStore } from "../../store/favorites.store";

export function ProfileMenuSection() {
  const favoriteRestaurants = useFavoritesStore((state) => state.restaurants);

  return (
    <View className="mx-5 mt-6 overflow-hidden rounded-3xl bg-white">
      <ProfileMenuItem
        title="Your orders"
        subtitle="View your order history"
        icon="receipt-outline"
      />

      <View className="mx-4 h-px bg-gray-100" />

      <ProfileMenuItem
        title="Addresses"
        subtitle="Manage delivery addresses"
        icon="location-outline"
      />

      <View className="mx-4 h-px bg-gray-100" />

      <ProfileMenuItem
        title="Favorites"
        subtitle="Restaurants and food you love"
        icon="heart-outline"
        badge={favoriteRestaurants.length}
        onPress={() => router.push("/favorites")}
      />

      <View className="mx-4 h-px bg-gray-100" />

      <ProfileMenuItem
        title="Payment methods"
        subtitle="Manage your payment options"
        icon="card-outline"
      />
    </View>
  );
}
