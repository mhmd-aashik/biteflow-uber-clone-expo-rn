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

      <Text className="mt-2 text-base text-text-secondary">
        {restaurant.deliveryTime}
      </Text>

      <Text className="mt-2 text-sm font-semibold text-success-500">
        {restaurant.deliveryFee === 0
          ? "Free delivery"
          : `AED ${restaurant.deliveryFee} delivery`}
      </Text>
    </View>
  );
}
