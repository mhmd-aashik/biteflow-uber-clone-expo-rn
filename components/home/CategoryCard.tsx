import { Pressable, Text } from "react-native";
import type { Category } from "../../types/category";

type Props = {
  category: Category;
  isSelected: boolean;
  onPress: () => void;
};

export function CategoryCard({ category, isSelected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`h-24 w-20 items-center justify-center rounded-3xl ${isSelected ? "bg-brand-500" : "bg-white"}`}
    >
      <Text className="text-3xl">{category.emoji}</Text>

      <Text
        className={`mt-2 text-sm font-semibold ${
          isSelected ? "text-white" : "text-text-primary"
        }`}
      >
        {category.name}
      </Text>
    </Pressable>
  );
}
