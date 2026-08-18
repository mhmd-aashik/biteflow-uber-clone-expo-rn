import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Screen } from "../../components/ui/Screen";
import { products } from "../../data/products";
import { FoodHero } from "../../components/food/FoodHero";
import { FoodInfo } from "../../components/food/FoodInfo";
import { useState } from "react";
import { QuantitySelector } from "../../components/food/QuantitySelector";

export default function FoodDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center px-5">
          <Text className="text-xl font-bold text-text-primary">
            Product not found
          </Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <FoodHero product={product} />
      <FoodInfo product={product} />

      <View className="mt-8 px-5">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => setQuantity((current) => current + 1)}
          onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
        />
      </View>
    </Screen>
  );
}
