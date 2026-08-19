import { Text, View } from "react-native";
import { RestaurantCard } from "./RestaurantCard";
import { restaurants } from "../../data/restaurants";
import { RestaurantEmptyState } from "./RestaurantEmptyState";

type Props = {
  selectedCategory: string;
  searchQuery: string;
};

export function RestaurantSection({ selectedCategory, searchQuery }: Props) {
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      selectedCategory === "all" ||
      restaurant.categorySlug === selectedCategory;

    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    return matchesSearch && matchesCategory;
  });
  return (
    <View className="mt-8 px-5">
      <Text className="text-xl font-bold text-text-primary">
        Popular near you
      </Text>

      {filteredRestaurants.length === 0 ? (
        <RestaurantEmptyState />
      ) : (
        <View className="mt-4 gap-4">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </View>
      )}
    </View>
  );
}
