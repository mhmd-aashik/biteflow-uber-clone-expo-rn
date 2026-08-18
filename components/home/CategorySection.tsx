import { ScrollView, Text, View } from "react-native";
import { CategoryCard } from "./CategoryCard";
import { categories } from "../../data/categories";
import { useState } from "react";

export function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState("burgers");

  return (
    <View className="mt-7">
      <Text className="px-5 text-xl font-bold text-text-primary">
        Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-3 px-5 pt-4"
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.slug}
            onPress={() => setSelectedCategory(category.slug)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
