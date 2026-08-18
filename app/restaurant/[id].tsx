import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { restaurants } from "../../data/restaurants";
import { Screen } from "../../components/ui/Screen";

export default function RestaurantDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const restaurant = restaurants.find((item) => item.id === Number(id));

  if (!restaurant) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center px-5">
          <Text className="text-xl font-bold text-text-primary">
            Restaurant not found
          </Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-2xl font-bold text-text-primary">
          {restaurant.name}
        </Text>

        <Text className="mt-2 text-base text-text-secondary">
          {restaurant.deliveryTime}
        </Text>
      </View>
    </Screen>
  );
}
