import { products } from "../../data/products";
import { Text, View } from "react-native";
import { MenuItem } from "../home/MenuItem";

type Props = {
  restaurantId: number;
};

export function RestaurantMenu({ restaurantId }: Props) {
  const restaurantProducts = products.filter(
    (product) => product.restaurantId === restaurantId,
  );

  return (
    <View className="mt-8 px-5">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-2xl font-bold text-text-primary">
            Popular Items
          </Text>

          <Text className="mt-1 text-sm text-text-secondary">
            Customer favorites from this restaurant
          </Text>
        </View>

        <Text className="text-sm font-semibold text-brand-500">
          {restaurantProducts.length} items
        </Text>
      </View>

      <View className="mt-4 gap-4">
        {restaurantProducts.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </View>
    </View>
  );
}
