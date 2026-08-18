import { Image, Pressable, Text, View } from "react-native";
import { CartItem } from "../../types/cart";
import { Ionicons } from "@expo/vector-icons";
import { useCartStore } from "../../store/cart.store";

type Props = {
  item: CartItem;
};

export function CartItemCard({ item }: Props) {
  const itemTotal = item.product.price * item.quantity;
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

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

        <View className="mt-3 flex-row items-center gap-3">
          <Text className="text-sm text-text-secondary">
            Quantity: {item.quantity}
          </Text>

          <Pressable
            onPress={() => increaseQuantity(item.product.id)}
            className="h-8 w-8 items-center justify-center rounded-full bg-surface active:opacity-80"
          >
            <Ionicons name="add" size={18} color="#171717" />
          </Pressable>
        </View>

        <Text className="mt-2 font-bold text-brand-500">AED {itemTotal}</Text>
      </View>
    </View>
  );
}
