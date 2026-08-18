import { Text, View } from "react-native";
import { CartItem } from "../../types/cart";

type Props = {
  items: CartItem[];
  total: number;
};

export function CheckoutOrderSummary({ items, total }: Props) {
  return (
    <View className="mx-5 mt-6">
      <Text className="text-lg font-bold text-text-primary">Order summary</Text>

      <View className="mt-3 rounded-2xl bg-white p-4">
        <View className="gap-4">
          {items.map((item) => (
            <View
              key={item.product.id}
              className="flex-row items-center justify-between gap-4"
            >
              <View className="flex-1">
                <Text
                  className="font-semibold text-text-primary"
                  numberOfLines={1}
                >
                  {item.quantity}× {item.product.name}
                </Text>
              </View>

              <Text className="font-semibold text-text-primary">
                AED {item.product.price * item.quantity}
              </Text>
            </View>
          ))}
        </View>

        <View className="my-4 h-px bg-gray-100" />

        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold text-text-primary">Total</Text>

          <Text className="text-xl font-bold text-brand-500">AED {total}</Text>
        </View>
      </View>
    </View>
  );
}
