import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Restaurant } from "../../types/restaurant";

type Props = {
  restaurant: Restaurant;
};

export function RestaurantStats({ restaurant }: Props) {
  return (
    <View className="mt-6 flex-row gap-3 px-5">
      <View className="flex-1 items-center rounded-2xl bg-white py-4">
        <Ionicons name="star" size={20} color="#171717" />

        <Text className="mt-2 text-base font-bold text-text-primary">
          {restaurant.rating}
        </Text>

        <Text className="mt-1 text-xs text-text-secondary">Rating</Text>
      </View>

      <View className="flex-1 items-center rounded-2xl bg-white py-4">
        <Ionicons name="time-outline" size={21} color="#171717" />

        <Text className="mt-2 text-base font-bold text-text-primary">
          {restaurant.deliveryTime}
        </Text>

        <Text className="mt-1 text-xs text-text-secondary">Delivery</Text>
      </View>

      <View className="flex-1 items-center rounded-2xl bg-white py-4">
        <Ionicons name="bicycle-outline" size={21} color="#171717" />

        <Text className="mt-2 text-base font-bold text-text-primary">
          {restaurant.deliveryFee === 0
            ? "Free"
            : `AED ${restaurant.deliveryFee}`}
        </Text>

        <Text className="mt-1 text-xs text-text-secondary">Fee</Text>
      </View>
    </View>
  );
}
