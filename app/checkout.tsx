import { useState } from "react";
import { CheckoutHeader } from "../components/checkout/CheckoutHeader";
import { DeliveryAddressCard } from "../components/checkout/DeliveryAddressCard";
import { Screen } from "../components/ui/Screen";
import { DeliveryInstructions } from "../components/checkout/DeliveryInstructions";
import { PaymentMethodCard } from "../components/checkout/PaymentMethodCard";
import { useCartStore } from "../store/cart.store";
import { CheckoutOrderSummary } from "../components/checkout/CheckoutOrderSummary";
import { ScrollView } from "react-native";
import { PlaceOrderButton } from "../components/checkout/PlaceOrderButton";
import { router } from "expo-router";

export default function CheckoutScreen() {
  const [deliveryInstructions, setDeliveryInstructions] = useState("");

  const items = useCartStore((state) => state.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <Screen>
      <CheckoutHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
        keyboardShouldPersistTaps="handled"
      >
        <DeliveryAddressCard />
        <DeliveryInstructions
          value={deliveryInstructions}
          onChangeText={setDeliveryInstructions}
        />
        <PaymentMethodCard />

        <CheckoutOrderSummary items={items} total={totalPrice} />

        <PlaceOrderButton
          total={totalPrice}
          onPress={() => {
            clearCart();
            router.replace("/order-success");
          }}
        />
      </ScrollView>
    </Screen>
  );
}
