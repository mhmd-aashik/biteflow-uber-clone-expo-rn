import { Text, View } from "react-native";

export function OrderSuccessDetails() {
  return (
    <View className="mt-8 w-full rounded-2xl bg-white p-5">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm text-text-secondary">Order number</Text>

        <Text className="font-bold text-text-primary">#BF1024</Text>
      </View>

      <View className="my-4 h-px bg-gray-100" />

      <View className="flex-row items-center justify-between">
        <Text className="text-sm text-text-secondary">Estimated delivery</Text>

        <Text className="font-bold text-text-primary">25–35 min</Text>
      </View>
    </View>
  );
}
