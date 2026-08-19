import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function RestaurantEmptyState() {
  return (
    <View className="items-center px-5 py-12">
      <View className="h-16 w-16 items-center justify-center rounded-full bg-brand-50">
        <Ionicons name="restaurant-outline" size={28} color="#FF5A36" />
      </View>

      <Text className="mt-4 text-lg font-bold text-text-primary">
        No restaurants found
      </Text>

      <Text className="mt-2 text-center text-sm text-text-secondary">
        Try another search or category.
      </Text>
    </View>
  );
}
