import { Image, Text, View } from "react-native";
import { CartItem } from "../../types/cart";

type Props = {
  item: CartItem;
};

export function CartItemCard({ item }: Props) {
  const itemTotal = item.product.price * item.quantity;

  return (
    <View className="flex-row gap-4 rounded-2xl bg-white p-4">
      <Image
        source={{ uri: item.product.image }}
        className="h-20 w-20 rounded-2xl"
        resizeMode="cover"
      />

      <View className="flex-1">
        <Text className="text-lg font-bold text-text-primary" numberOfLines={1}>
          {item.product.name}
        </Text>

        <Text className="mt-2 text-sm text-text-secondary">
          Quantity: {item.quantity}
        </Text>

        <Text className="mt-2 font-bold text-brand-500">AED {itemTotal}</Text>
      </View>
    </View>
  );
}
