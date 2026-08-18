import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function DeliveryAddressCard() {
  return (
    <View className="mx-5 mt-6">
      <Text className="text-lg font-bold text-text-primary">
        Delivery address
      </Text>

      <Pressable className="mt-3 flex-row items-center rounded-2xl bg-white p-4 active:opacity-90">
        <View className="h-11 w-11 items-center justify-center rounded-full bg-brand-50">
          <Ionicons name="location-outline" size={22} color="#FF5A36" />
        </View>

        <View className="ml-4 flex-1">
          <Text className="font-bold text-text-primary">Home</Text>

          <Text className="mt-1 text-sm text-text-secondary" numberOfLines={2}>
            Al Warqa, Dubai
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9A9A9A" />
      </Pressable>
    </View>
  );
}
