import { Text, View } from "react-native";
import { RestaurantCard } from "./RestaurantCard";
import { restaurants } from "../../data/restaurants";

export function RestaurantSection() {
  return (
    <View className="mt-8 px-5">
      <Text className="text-xl font-bold text-text-primary">
        Popular near you
      </Text>

      <View className="mt-4 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </View>
    </View>
  );
}
