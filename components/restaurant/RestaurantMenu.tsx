import { products } from "../../data/products";
import { MenuItem } from "./MenuItem";
import { Text, View } from "react-native";

type Props = {
  restaurantId: number;
};

export function RestaurantMenu({ restaurantId }: Props) {
  const restaurantProducts = products.filter(
    (product) => product.restaurantId === restaurantId,
  );

  return (
    <View className="mt-8 px-5">
      <Text className="text-2xl font-bold text-text-primary">
        Popular Items
      </Text>

      <View className="mt-4 gap-4">
        {restaurantProducts.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </View>
    </View>
  );
}
