import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function FavoritesEmptyState() {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="h-20 w-20 items-center justify-center rounded-full bg-brand-50">
        <Ionicons name="heart-outline" size={36} color="#FF5A36" />
      </View>

      <Text className="mt-5 text-2xl font-bold text-text-primary">
        No favorites yet
      </Text>

      <Text className="mt-2 text-center text-base leading-6 text-text-secondary">
        Save restaurants you love and they will appear here.
      </Text>

      <Pressable
        onPress={() => router.replace("/")}
        className="mt-6 rounded-2xl bg-brand-500 px-7 py-4 active:opacity-90"
      >
        <Text className="font-bold text-white">Browse restaurants</Text>
      </Pressable>
    </View>
  );
}
