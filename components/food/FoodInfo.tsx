import { Text, View } from "react-native";
import { Product } from "../../types/product";

type Props = {
  product: Product;
};

export function FoodInfo({ product }: Props) {
  return (
    <View className="px-5 pt-6">
      <View className="flex-row items-start justify-between gap-4">
        <Text className="flex-1 text-3xl font-bold text-text-primary">
          {product.name}
        </Text>

        <Text className="text-xl font-bold text-brand-500">
          AED {product.price}
        </Text>
      </View>

      <Text className="mt-4 text-base leading-6 text-text-secondary">
        {product.description}
      </Text>
    </View>
  );
}
