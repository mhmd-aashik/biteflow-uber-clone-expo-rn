import { useState } from "react";
import { CheckoutHeader } from "../components/checkout/CheckoutHeader";
import { DeliveryAddressCard } from "../components/checkout/DeliveryAddressCard";
import { Screen } from "../components/ui/Screen";
import { DeliveryInstructions } from "../components/checkout/DeliveryInstructions";

export default function CheckoutScreen() {
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  return (
    <Screen>
      <CheckoutHeader />
      <DeliveryAddressCard />
      <DeliveryInstructions
        value={deliveryInstructions}
        onChangeText={setDeliveryInstructions}
      />
    </Screen>
  );
}
