import { Text, View } from "react-native";
import { useCartStore } from "../store/cart.store";
import { Screen } from "../components/ui/Screen";
import { CartItemCard } from "../components/cart/CartItemCard";

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
            <CartItemCard key={item.product.id} item={item} />
          ))}
        </View>
      </View>
    </Screen>
  );
}
