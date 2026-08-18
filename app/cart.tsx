import { Text, View } from "react-native";
import { useCartStore } from "../store/cart.store";
import { Screen } from "../components/ui/Screen";

export default function CartScreen() {
  const items = useCartStore((state) => state.items);

  return (
    <Screen>
      <View className="px-5 pt-5">
        <Text className="text-3xl font-bold text-text-primary">Your Cart</Text>

        <Text className="mt-2 text-base text-text-secondary">
          {items.length} items
        </Text>

        <View className="mt-6 gap-4">
          {items.map((item) => (
            <View key={item.product.id} className="rounded-2xl bg-white p-4">
              <Text className="text-lg font-bold text-text-primary">
                {item.product.name}
              </Text>

              <Text className="mt-2 text-text-secondary">
                Quantity: {item.quantity}
              </Text>

              <Text className="mt-2 font-bold text-brand-500">
                AED {item.product.price * item.quantity}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
}
