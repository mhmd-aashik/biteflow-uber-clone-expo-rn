import { Text, View } from "react-native";

export function ProfileHeader() {
  return (
    <View className="px-5 pt-4">
      <Text className="text-3xl font-bold text-text-primary">Profile</Text>

      <Text className="mt-2 text-base text-text-secondary">
        Manage your account and preferences
      </Text>
    </View>
  );
}
