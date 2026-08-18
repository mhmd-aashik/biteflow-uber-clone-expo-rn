import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export function BrowseSearch() {
  return (
    <View className="mx-5 mt-5 h-14 flex-row items-center rounded-2xl bg-white px-4">
      <Ionicons name="search-outline" size={21} color="#777777" />

      <TextInput
        className="ml-3 flex-1 text-base text-text-primary"
        placeholder="Search food or restaurants"
        placeholderTextColor="#9A9A9A"
      />
    </View>
  );
}
