import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F9F6]">
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-4xl font-bold text-text-primary">
          BiteFlow
        </Text>

        <Text className="mt-2 text-base text-gray-500">
          Food delivery, rebuilt properly.
        </Text>

        <View className="mt-6 rounded-2xl bg-orange-500 px-6 py-4">
          <Text className="font-bold text-white">
            NativeWind is working 🔥
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}