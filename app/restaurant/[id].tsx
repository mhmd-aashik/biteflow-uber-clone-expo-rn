import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { restaurants } from "../../data/restaurants";
import { Screen } from "../../components/ui/Screen";
import { RestaurantHero } from "../../components/restaurant/RestaurantHero";
import { RestaurantInfo } from "../../components/restaurant/RestaurantInfo";
import { RestaurantMenu } from "../../components/restaurant/RestaurantMenu";
import { RestaurantStats } from "../../components/restaurant/RestaurantStats";

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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <RestaurantHero restaurant={restaurant} />
        <RestaurantInfo restaurant={restaurant} />
        <RestaurantStats />
        <RestaurantMenu restaurantId={restaurant.id} />
      </ScrollView>
    </Screen>
  );
}
