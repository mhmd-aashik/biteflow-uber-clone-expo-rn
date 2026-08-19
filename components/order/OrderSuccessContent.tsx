import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function OrderSuccessContent() {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="h-24 w-24 items-center justify-center rounded-full bg-brand-500">
        <Ionicons name="checkmark" size={48} color="#FFFFFF" />
      </View>

      <Text className="mt-7 text-3xl font-bold text-text-primary">
        Order placed!
      </Text>

      <Text className="mt-3 text-center text-base leading-6 text-text-secondary">
        Your order has been confirmed and is being prepared.
      </Text>

      <View className="mt-8 w-full rounded-2xl bg-white p-5">
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-text-secondary">Order number</Text>

          <Text className="font-bold text-text-primary">#BF1024</Text>
        </View>

        <View className="my-4 h-px bg-gray-100" />

        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-text-secondary">
            Estimated delivery
          </Text>

          <Text className="font-bold text-text-primary">25–35 min</Text>
        </View>
      </View>

      <Pressable
        onPress={() => router.replace("/")}
        className="mt-8 h-14 w-full items-center justify-center rounded-2xl bg-brand-500 active:opacity-90"
      >
        <Text className="text-base font-bold text-white">Back to home</Text>
      </Pressable>
    </View>
  );
}
