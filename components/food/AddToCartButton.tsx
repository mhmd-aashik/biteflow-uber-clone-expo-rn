import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  totalPrice: number;
  onPress: () => void;
};

export function AddToCartButton({ totalPrice, onPress }: Props) {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.97);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      style={animatedStyle}
      className="h-14 flex-1 flex-row items-center justify-between rounded-2xl bg-brand-500 px-5"
    >
      <View className="flex-row items-center gap-2">
        <Ionicons name="bag-handle-outline" size={20} color="#FFFFFF" />

        <Text className="text-base font-bold text-white">Add to cart</Text>
      </View>

      <Text className="text-base font-bold text-white">AED {totalPrice}</Text>
    </AnimatedPressable>
  );
}
