import { Text } from "react-native";

type Props = {
  productName: string;
};

export function MatchingProductLabel({ productName }: Props) {
  return (
    <Text className="mt-2 px-2 text-sm text-text-secondary">
      Matches:{" "}
      <Text className="font-semibold text-brand-500">{productName}</Text>
    </Text>
  );
}
