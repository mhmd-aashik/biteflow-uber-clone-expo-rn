import { ScrollView, View } from "react-native";
import { BrowseCategoryChip } from "./BrowseCategoryChip";
import { categories } from "../../data/categories";

type Props = {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
};

export function BrowseCategoryFilter({
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <View className="mt-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-3 px-5"
      >
        {categories.map((category) => (
          <BrowseCategoryChip
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.slug}
            onPress={() => onSelectCategory(category.slug)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
