import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { Product } from "../../types/product";

type Props = {
  product: Product;
};

export function MenuItem({ product }: Props) {
  return (
    <Pressable
      onPress={() => router.push(`/food/${product.id}`)}
      className="flex-row rounded-2xl bg-white p-3 active:opacity-90"
    >
      <Image
        source={{ uri: product.image }}
        className="h-28 w-28 rounded-xl"
        resizeMode="cover"
      />

      <View className="ml-4 flex-1 py-1">
        <Text className="text-lg font-bold text-text-primary" numberOfLines={1}>
          {product.name}
        </Text>

        <Text
          className="mt-2 text-sm leading-5 text-text-secondary"
          numberOfLines={2}
        >
          {product.description}
        </Text>

        <View className="mt-auto flex-row items-center justify-between">
          <Text className="text-base font-bold text-text-primary">
            AED {product.price}
          </Text>

          <View className="h-9 w-9 items-center justify-center rounded-full bg-brand-500">
            <Ionicons name="add" size={21} color="#FFFFFF" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
