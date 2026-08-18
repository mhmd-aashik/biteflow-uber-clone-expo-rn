import { CheckoutHeader } from "../components/checkout/CheckoutHeader";
import { DeliveryAddressCard } from "../components/checkout/DeliveryAddressCard";
import { Screen } from "../components/ui/Screen";

export default function CheckoutScreen() {
  return (
    <Screen>
      <CheckoutHeader />
      <DeliveryAddressCard />
    </Screen>
  );
}
