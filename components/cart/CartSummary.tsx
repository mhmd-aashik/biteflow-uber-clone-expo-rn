import { Text, View } from "react-native";
import { CartItem } from "../../types/cart";

type Props = {
  total: number;
};

export function CartSummary({ total }: Props) {
  return (
    <View className="mt-6 rounded-3xl bg-white p-5">
      <Text className="text-xl font-bold text-text-primary">Order Summary</Text>

      <View className="mt-5 flex-row items-center justify-between">
        <Text className="text-base text-text-secondary">Subtotal</Text>

        <Text className="text-base font-bold text-text-primary">
          AED {total}
        </Text>
      </View>
    </View>
  );
}
