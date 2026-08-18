import { Text, View } from "react-native";
import { CartItem } from "../../types/cart";

type Props = {
  items: CartItem[];
};

export function CartSummary({ items }: Props) {
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <View className="mt-6 rounded-3xl bg-white p-5">
      <Text className="text-xl font-bold text-text-primary">Order Summary</Text>

      <View className="mt-5 flex-row items-center justify-between">
        <Text className="text-base text-text-secondary">Subtotal</Text>

        <Text className="text-base font-bold text-text-primary">
          AED {subtotal}
        </Text>
      </View>
    </View>
  );
}
