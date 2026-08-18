import { Pressable, Text } from "react-native";
import type { Category } from "../../types/category";

type Props = {
  category: Category;
};

export function CategoryCard({ category }: Props) {
  return (
    <Pressable className="h-24 w-20 items-center justify-center rounded-3xl bg-white">
      <Text className="text-3xl">{category.emoji}</Text>

      <Text className="mt-2 text-sm font-semibold text-text-primary">
        {category.name}
      </Text>
    </Pressable>
  );
}
