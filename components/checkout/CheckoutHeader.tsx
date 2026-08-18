import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function CheckoutHeader() {
  return (
    <View className="h-16 flex-row items-center justify-between px-5">
      <Pressable
        onPress={() => router.back()}
        className="h-11 w-11 items-center justify-center rounded-full bg-white active:opacity-80"
      >
        <Ionicons name="arrow-back" size={22} color="#171717" />
      </Pressable>

      <Text className="text-xl font-bold text-text-primary">Checkout</Text>

      <View className="h-11 w-11" />
    </View>
  );
}
