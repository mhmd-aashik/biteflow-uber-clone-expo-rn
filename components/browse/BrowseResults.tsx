import { View } from "react-native";
import { restaurants } from "../../data/restaurants";
import { RestaurantCard } from "../home/RestaurantCard";
import { BrowseEmptyState } from "./BrowseEmptyState";

type Props = {
  selectedCategory: string;
};

export function BrowseResults({ selectedCategory }: Props) {
  const filteredRestaurants =
    selectedCategory === "all"
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.categorySlug === selectedCategory,
        );

  if (filteredRestaurants.length === 0) {
    return <BrowseEmptyState />;
  }

  return (
    <View className="mt-6 gap-4 px-5">
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </View>
  );
}
