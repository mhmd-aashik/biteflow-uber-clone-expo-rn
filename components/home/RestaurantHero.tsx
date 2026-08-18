import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";
import { Restaurant } from "../../types/restaurant";

type Props = {
  restaurant: Restaurant;
};

export function RestaurantHero({ restaurant }: Props) {
  return (
    <View className="relative">
      <Image
        source={{ uri: restaurant.image }}
        className="h-72 w-full"
        resizeMode="cover"
      />

      <Pressable
        onPress={() => router.back()}
        className="absolute left-5 top-5 h-11 w-11 items-center justify-center rounded-full bg-white"
      >
        <Ionicons name="arrow-back" size={22} color="#171717" />
      </Pressable>
    </View>
  );
}
