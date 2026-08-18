import { Text, View } from "react-native";
import { Product } from "../../types/product";

type Props = {
  product: Product;
};

export function FoodInfo({ product }: Props) {
  return (
    <View className="px-5 pt-6">
      <Text className="text-3xl font-bold text-text-primary">
        {product.name}
      </Text>

      <Text className="mt-3 text-base leading-6 text-text-secondary">
        {product.description}
      </Text>

      <Text className="mt-4 text-xl font-bold text-brand-500">
        AED {product.price}
      </Text>
    </View>
  );
}
