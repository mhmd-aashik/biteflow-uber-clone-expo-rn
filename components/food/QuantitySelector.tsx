import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function QuantitySelector({ quantity, onIncrease, onDecrease }: Props) {
  return (
    <View className="flex-row items-center gap-5">
      <Pressable
        onPress={onDecrease}
        disabled={quantity === 1}
        className={`h-11 w-11 items-center justify-center rounded-full ${
          quantity === 1 ? "bg-gray-100" : "bg-white"
        }`}
      >
        <Ionicons
          name="remove"
          size={22}
          color={quantity === 1 ? "#9A9A9A" : "#171717"}
        />
      </Pressable>

      <Text className="min-w-6 text-center text-lg font-bold text-text-primary">
        {quantity}
      </Text>

      <Pressable
        onPress={onIncrease}
        className="h-11 w-11 items-center justify-center rounded-full bg-white active:opacity-80"
      >
        <Ionicons name="add" size={22} color="#171717" />
      </Pressable>
    </View>
  );
}
