import { Image, Pressable, Text, View } from "react-native";
import { Restaurant } from "../../types/restaurant";
import { router } from "expo-router";

type Props = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: Props) {
  return (
    <Pressable
      className="overflow-hidden rounded-3xl bg-white active:opacity-90"
      onPress={() =>
        router.push({
          pathname: "restaurant/[id]",
          params: {
            id: restaurant.id,
          },
        })
      }
    >
      <Image
        source={{ uri: restaurant.image }}
        className="h-48 w-full"
        resizeMode="cover"
      />

      <View className="p-4">
        <View className="flex-row items-center justify-between">
          <Text
            className="flex-1 text-lg font-bold text-text-primary"
            numberOfLines={1}
          >
            {restaurant.name}
          </Text>

          <Text className="ml-3 text-sm font-semibold text-text-primary">
            ⭐ {restaurant.rating}
          </Text>
        </View>

        <Text className="mt-2 text-sm text-text-secondary">
          {restaurant.deliveryTime}
        </Text>

        <Text className="mt-2 text-sm font-semibold text-success-500">
          {restaurant.deliveryFee === 0
            ? "Free delivery"
            : `AED ${restaurant.deliveryFee} delivery`}
        </Text>
      </View>
    </Pressable>
  );
}
