import { Pressable, Text } from "react-native";

type Props = {
  total: number;
  onPress: () => void;
};

export function CheckoutButton({ total, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="mt-5 h-14 items-center justify-center rounded-2xl bg-brand-500 active:opacity-90"
    >
      <Text className="text-base font-bold text-white">
        Checkout • AED {total}
      </Text>
    </Pressable>
  );
}
