import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Restaurant } from "../../types/restaurant";

type Props = {
  restaurant: Restaurant;
};

export function RestaurantInfo({ restaurant }: Props) {
  return (
    <View className="px-5 pt-5">
      <Text className="text-3xl font-bold text-text-primary">
        {restaurant.name}
      </Text>

      <View className="mt-3 flex-row flex-wrap items-center gap-x-3 gap-y-2">
        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={16} color="#171717" />

          <Text className="text-sm font-semibold text-text-primary">
            {restaurant.rating}
          </Text>
        </View>

        <Text className="text-sm text-text-secondary">•</Text>

        <View className="flex-row items-center gap-1">
          <Ionicons name="time-outline" size={16} color="#777777" />

          <Text className="text-sm text-text-secondary">
            {restaurant.deliveryTime}
          </Text>
        </View>

        <Text className="text-sm text-text-secondary">•</Text>

        <Text className="text-sm font-semibold text-success-500">
          {restaurant.deliveryFee === 0
            ? "Free delivery"
            : `AED ${restaurant.deliveryFee} delivery`}
        </Text>
      </View>
    </View>
  );
}
