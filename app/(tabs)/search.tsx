import { Text, View } from "react-native";
import { Screen } from "../../components/ui/Screen";

export default function SearchScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-text-primary">Browse</Text>
      </View>
    </Screen>
  );
}
