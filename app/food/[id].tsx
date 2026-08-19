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
  const [addedToCart, setAddedToCart] = useState(false);

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

    setAddedToCart(true);
    setQuantity(1);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
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

        {addedToCart && (
          <View className="mx-5 mt-6 flex-row items-center justify-center rounded-2xl bg-green-50 px-4 py-3">
            <Text className="font-semibold text-green-700">
              ✓ Added to cart
            </Text>
          </View>
        )}

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
