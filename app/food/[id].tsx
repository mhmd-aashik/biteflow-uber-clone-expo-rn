import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Screen } from "../../components/ui/Screen";

export default function FoodDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen>
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-2xl font-bold text-text-primary">
          Food Details
        </Text>

        <Text className="mt-2 text-base text-text-secondary">
          Product ID: {id}
        </Text>
      </View>
    </Screen>
  );
}
