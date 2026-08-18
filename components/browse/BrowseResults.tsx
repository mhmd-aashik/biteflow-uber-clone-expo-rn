import { View } from "react-native";
import { restaurants } from "../../data/restaurants";
import { RestaurantCard } from "../home/RestaurantCard";
import { BrowseEmptyState } from "./BrowseEmptyState";
import { products } from "../../data/products";

type Props = {
  selectedCategory: string;
  searchQuery: string;
};

export function BrowseResults({ selectedCategory, searchQuery }: Props) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      selectedCategory === "all" ||
      restaurant.categorySlug === selectedCategory;

    const matchesRestaurantName = restaurant.name
      .toLowerCase()
      .includes(normalizedQuery);

    const hasMatchingProduct = products.some(
      (product) =>
        product.restaurantId === restaurant.id &&
        product.name.toLowerCase().includes(normalizedQuery),
    );

    const matchesSearch =
      normalizedQuery.length === 0 ||
      matchesRestaurantName ||
      hasMatchingProduct;

    return matchesCategory && matchesSearch;
  });
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
