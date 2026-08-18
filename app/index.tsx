import { ScrollView, Text, View } from "react-native";
import { Screen } from "../components/ui/Screen";
import { HomeHeader } from "../components/home/HomeHeader";
import { HomeSearch } from "../components/home/HomeSearch";
import { CategorySection } from "../components/home/CategorySection";
import { RestaurantSection } from "../components/home/RestaurantSection";
import { useState } from "react";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-8"
      >
        <HomeHeader />
        <HomeSearch value={searchQuery} onChangeText={setSearchQuery} />
        <CategorySection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <RestaurantSection
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </ScrollView>
    </Screen>
  );
}
