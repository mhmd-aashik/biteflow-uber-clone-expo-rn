import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  totalPrice: number;
  onPress: () => void;
};

export function AddToCartButton({ totalPrice, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="h-14 flex-1 flex-row items-center justify-between rounded-2xl bg-brand-500 px-5 active:opacity-90"
    >
      <View className="flex-row items-center gap-2">
        <Ionicons name="bag-handle-outline" size={20} color="#FFFFFF" />

        <Text className="text-base font-bold text-white">Add to cart</Text>
      </View>

      <Text className="text-base font-bold text-white">AED {totalPrice}</Text>
    </Pressable>
  );
}
