import { useState } from "react";
import { BrowseHeader } from "../../components/browse/BrowseHeader";
import { BrowseSearch } from "../../components/browse/BrowseSearch";
import { Screen } from "../../components/ui/Screen";
import { BrowseCategoryFilter } from "../../components/browse/BrowseCategoryFilter";
import { BrowseResults } from "../../components/browse/BrowseResults";

export default function SearchScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Screen>
      <BrowseHeader />
      <BrowseSearch value={searchQuery} onChangeText={setSearchQuery} />
      <BrowseCategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <BrowseResults selectedCategory={selectedCategory} />
    </Screen>
  );
}
