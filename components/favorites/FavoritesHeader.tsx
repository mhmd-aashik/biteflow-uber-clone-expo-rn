import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function FavoritesHeader() {
  return (
    <View className="h-16 flex-row items-center px-5">
      <Pressable
        onPress={() => router.back()}
        className="h-11 w-11 items-center justify-center rounded-full bg-white active:opacity-80"
      >
        <Ionicons name="arrow-back" size={22} color="#171717" />
      </Pressable>

      <Text className="ml-4 text-2xl font-bold text-text-primary">
        Favorites
      </Text>
    </View>
  );
}
