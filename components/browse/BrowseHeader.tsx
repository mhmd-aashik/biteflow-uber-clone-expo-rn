import { Text, View } from "react-native";

export function BrowseHeader() {
  return (
    <View className="px-5 pt-4">
      <Text className="text-3xl font-bold text-text-primary">Browse</Text>

      <Text className="mt-2 text-base text-text-secondary">
        Find your favorite food and restaurants
      </Text>
    </View>
  );
}
