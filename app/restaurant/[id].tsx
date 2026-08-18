import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { restaurants } from "../../data/restaurants";
import { Screen } from "../../components/ui/Screen";
import { RestaurantHero } from "../../components/home/RestaurantHero";
import { RestaurantInfo } from "../../components/home/RestaurantInfo";
import { RestaurantStats } from "../../components/home/RestaurantStats";
import { RestaurantMenu } from "../../components/home/RestaurantMenu";

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
        <RestaurantStats restaurant={restaurant} />
        <RestaurantMenu restaurantId={restaurant.id} />
      </ScrollView>
    </Screen>
  );
}
