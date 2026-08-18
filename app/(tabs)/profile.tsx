import { Text, View } from "react-native";
import { Screen } from "../../components/ui/Screen";

export default function ProfileScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-text-primary">Profile</Text>
      </View>
    </Screen>
  );
}
