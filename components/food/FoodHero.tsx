import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";
import { Product } from "../../types/product";

type Props = {
  product: Product;
};

export function FoodHero({ product }: Props) {
  return (
    <View className="relative">
      <Image
        source={{ uri: product.image }}
        className="h-80 w-full"
        resizeMode="cover"
      />

      <Pressable
        onPress={() => router.back()}
        className="absolute left-5 top-5 h-11 w-11 items-center justify-center rounded-full bg-black/40 active:opacity-80"
      >
        <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}
