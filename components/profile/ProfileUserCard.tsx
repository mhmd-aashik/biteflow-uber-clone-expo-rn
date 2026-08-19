import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function ProfileUserCard() {
  return (
    <View className="mx-5 mt-6 rounded-3xl bg-white p-5">
      <View className="flex-row items-center">
        <View className="h-16 w-16 items-center justify-center rounded-full bg-brand-50">
          <Ionicons name="person" size={30} color="#FF5A36" />
        </View>

        <View className="ml-4 flex-1">
          <Text className="text-xl font-bold text-text-primary">
            Mohammed Aashik{" "}
          </Text>

          <Text className="mt-1 text-sm text-text-secondary">
            aashikcode5@gmail.com
          </Text>
        </View>

        <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-surface active:opacity-80">
          <Ionicons name="pencil-outline" size={18} color="#171717" />
        </Pressable>
      </View>
    </View>
  );
}
