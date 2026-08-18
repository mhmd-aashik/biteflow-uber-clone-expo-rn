import { Pressable, Text } from "react-native";
import { Category } from "../../types/category";

type Props = {
  category: Category;
  isSelected: boolean;
  onPress: () => void;
};

export function BrowseCategoryChip({ category, isSelected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center gap-2 rounded-full px-4 py-3 ${
        isSelected ? "bg-brand-500" : "bg-white"
      }`}
    >
      <Text className="text-base">{category.emoji}</Text>

      <Text
        className={`text-sm font-semibold ${
          isSelected ? "text-white" : "text-text-primary"
        }`}
      >
        {category.name}
      </Text>
    </Pressable>
  );
}
