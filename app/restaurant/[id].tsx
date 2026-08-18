import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../components/ui/Screen";
import { View, Text } from "react-native";

export default function RestaurantDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen>
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-2xl font-bold text-text-primary">
          Restaurant Details
        </Text>

        <Text className="mt-2 text-base text-text-secondary">
          Restaurant ID: {id}
        </Text>
      </View>
    </Screen>
  );
}
