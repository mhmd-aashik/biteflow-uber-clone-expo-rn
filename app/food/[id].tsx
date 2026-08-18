import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Screen } from "../../components/ui/Screen";
import { products } from "../../data/products";
import { FoodHero } from "../../components/food/FoodHero";

export default function FoodDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

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
    </Screen>
  );
}
