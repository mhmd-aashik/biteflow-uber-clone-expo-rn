import { useState } from "react";
import { BrowseHeader } from "../../components/browse/BrowseHeader";
import { BrowseSearch } from "../../components/browse/BrowseSearch";
import { Screen } from "../../components/ui/Screen";
import { BrowseCategoryFilter } from "../../components/browse/BrowseCategoryFilter";
import { BrowseResults } from "../../components/browse/BrowseResults";
import { ScrollView } from "react-native";

export default function SearchScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <BrowseHeader />
        <BrowseSearch value={searchQuery} onChangeText={setSearchQuery} />
        <BrowseCategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <BrowseResults
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </ScrollView>
    </Screen>
  );
}
