import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function QuantitySelector({ quantity, onIncrease, onDecrease }: Props) {
  return (
    <View className="flex-row items-center rounded-2xl bg-white p-2">
      <Pressable
        onPress={onDecrease}
        disabled={quantity === 1}
        className={`h-10 w-10 items-center justify-center rounded-xl ${
          quantity === 1 ? "bg-gray-100" : "bg-brand-50 active:opacity-80"
        }`}
      >
        <Ionicons
          name="remove"
          size={20}
          color={quantity === 1 ? "#9A9A9A" : "#FF5A36"}
        />
      </Pressable>

      <Text className="min-w-12 text-center text-lg font-bold text-text-primary">
        {quantity}
      </Text>

      <Pressable
        onPress={onIncrease}
        className="h-10 w-10 items-center justify-center rounded-xl bg-brand-50 active:opacity-80"
      >
        <Ionicons name="add" size={20} color="#FF5A36" />
      </Pressable>
    </View>
  );
}
