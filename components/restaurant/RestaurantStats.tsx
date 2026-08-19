import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function RestaurantStats() {
  return (
    <View className="mx-5 mt-6 flex-row rounded-2xl bg-white py-4">
      <View className="flex-1 items-center">
        <Ionicons name="thumbs-up-outline" size={21} color="#FF5A36" />

        <Text className="mt-2 font-bold text-text-primary">95%</Text>

        <Text className="mt-1 text-xs text-text-secondary">Reviews</Text>
      </View>

      <View className="w-px bg-gray-100" />

      <View className="flex-1 items-center">
        <Ionicons name="bag-handle-outline" size={21} color="#FF5A36" />

        <Text className="mt-2 font-bold text-text-primary">AED 25</Text>

        <Text className="mt-1 text-xs text-text-secondary">Minimum</Text>
      </View>

      <View className="w-px bg-gray-100" />

      <View className="flex-1 items-center">
        <Ionicons name="restaurant-outline" size={21} color="#FF5A36" />

        <Text className="mt-2 font-bold text-text-primary">20+</Text>

        <Text className="mt-1 text-xs text-text-secondary">Items</Text>
      </View>
    </View>
  );
}
