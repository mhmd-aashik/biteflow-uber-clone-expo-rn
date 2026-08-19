import { router } from "expo-router";
import { Pressable, Text } from "react-native";

export function BackToHomeButton() {
  return (
    <Pressable
      onPress={() => router.replace("/")}
      className="mt-8 h-14 w-full items-center justify-center rounded-2xl bg-brand-500 active:opacity-90"
    >
      <Text className="text-base font-bold text-white">Back to home</Text>
    </Pressable>
  );
}
