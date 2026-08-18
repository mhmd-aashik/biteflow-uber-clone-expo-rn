import { Text, View } from "react-native";
import { RestaurantCard } from "./RestaurantCard";
import { restaurants } from "../../data/restaurants";

type Props = {
  selectedCategory: string;
};

export function RestaurantSection({ selectedCategory }: Props) {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.categorySlug === selectedCategory,
  );

  return (
    <View className="mt-8 px-5">
      <Text className="text-xl font-bold text-text-primary">
        Popular near you
      </Text>

      <View className="mt-4 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </View>
    </View>
  );
}
