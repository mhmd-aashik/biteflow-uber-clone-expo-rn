import { Image, Pressable, Text, View } from "react-native";
import { Product } from "../../types/product";
import { router } from "expo-router";

type Props = {
  product: Product;
};

export function MenuItem({ product }: Props) {
  return (
    <Pressable
      className="flex-row gap-4 rounded-2xl bg-white p-4 active:opacity-90"
      onPress={() =>
        router.push({
          pathname: "/food/[id]",
          params: {
            id: product.id,
          },
        })
      }
    >
      <View className="flex-1">
        <Text className="text-lg font-bold text-text-primary" numberOfLines={1}>
          {product.name}
        </Text>

        <Text
          className="mt-2 text-sm leading-5 text-text-secondary"
          numberOfLines={2}
        >
          {product.description}
        </Text>

        <Text className="mt-3 text-base font-bold text-brand-500">
          AED {product.price}
        </Text>
      </View>

      <Image
        source={{ uri: product.image }}
        className="h-24 w-24 rounded-2xl"
        resizeMode="cover"
      />
    </Pressable>
  );
}
