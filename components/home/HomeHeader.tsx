import { Text, View } from "react-native";

export function HomeHeader() {
  return (
    <View className="px-5 pt-4">
      <Text className="text-sm text-text-secondary">Deliver to</Text>

      <Text className="mt-1 text-2xl font-bold text-text-primary">
        Al Warqa, Dubai
      </Text>
    </View>
  );
}
