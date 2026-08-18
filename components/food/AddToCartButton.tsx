import { Pressable, Text } from "react-native";

type Props = {
  totalPrice: number;
  onPress: () => void;
};

export function AddToCartButton({ totalPrice, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="h-14 flex-1 items-center justify-center rounded-2xl bg-brand-500 active:opacity-90"
    >
      <Text className="text-base font-bold text-white">
        Add to cart • AED {totalPrice}
      </Text>
    </Pressable>
  );
}
