import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Restaurant } from "../../types/restaurant";

type Props = {
  restaurant: Restaurant;
};

export function FoodRestaurantInfo({ restaurant }: Props) {
  return (
    <Pressable
      onPress={() => router.push(`/restaurant/${restaurant.id}`)}
      className="mx-5 mt-6 flex-row items-center rounded-2xl bg-white p-4 active:opacity-90"
    >
      <View className="h-11 w-11 items-center justify-center rounded-full bg-brand-50">
        <Ionicons name="restaurant-outline" size={21} color="#FF5A36" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-sm text-text-secondary">From</Text>

        <Text className="mt-1 font-bold text-text-primary">
          {restaurant.name}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9A9A9A" />
    </Pressable>
  );
}
