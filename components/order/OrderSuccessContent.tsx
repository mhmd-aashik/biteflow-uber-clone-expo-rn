import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { OrderSuccessDetails } from "./OrderSuccessDetails";
import { BackToHomeButton } from "./BackToHomeButton";

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

      <OrderSuccessDetails />

      <BackToHomeButton />
    </View>
  );
}
