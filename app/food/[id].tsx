import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { Screen } from "../../components/ui/Screen";
import { products } from "../../data/products";
import { FoodHero } from "../../components/food/FoodHero";
import { FoodInfo } from "../../components/food/FoodInfo";
import { useState } from "react";
import { QuantitySelector } from "../../components/food/QuantitySelector";
import { AddToCartButton } from "../../components/food/AddToCartButton";
import { useCartStore } from "../../store/cart.store";
import { FoodRestaurantInfo } from "../../components/food/FoodRestaurantInfo";
import { restaurants } from "../../data/restaurants";

export default function FoodDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === Number(id));

  const addItem = useCartStore((state) => state.addItem);

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

  const totalPrice = product.price * quantity;

  const restaurant = restaurants.find(
    (item) => item.id === product.restaurantId,
  );

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <FoodHero product={product} />

        <FoodInfo product={product} />

        {restaurant && <FoodRestaurantInfo restaurant={restaurant} />}

        <View className="mt-8 flex-row items-center gap-4 px-5">
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((current) => current + 1)}
            onDecrease={() =>
              setQuantity((current) => Math.max(1, current - 1))
            }
          />

          <AddToCartButton totalPrice={totalPrice} onPress={handleAddToCart} />
        </View>
      </ScrollView>
    </Screen>
  );
}
