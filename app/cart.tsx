import { ScrollView, Text, View } from "react-native";
import { useCartStore } from "../store/cart.store";
import { Screen } from "../components/ui/Screen";
import { CartItemCard } from "../components/cart/CartItemCard";
import { CartSummary } from "../components/cart/CartSummary";
import { CartEmptyState } from "../components/cart/CartEmptyState";
import { CheckoutButton } from "../components/cart/CheckoutButton";

export default function CartScreen() {
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <Screen>
        <CartEmptyState />
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-10 pt-5"
      >
        <View className="px-5 pt-5">
          <Text className="text-3xl font-bold text-text-primary">
            Your Cart
          </Text>

          <Text className="mt-2 text-base text-text-secondary">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </Text>

          <View className="mt-6 gap-4">
            {items.map((item) => (
              <CartItemCard key={item.product.id} item={item} />
            ))}

            <CartSummary total={totalPrice} />

            <CheckoutButton
              total={totalPrice}
              onPress={() => {
                console.log("Go to checkout");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
