import { BrowseHeader } from "../../components/browse/BrowseHeader";
import { BrowseSearch } from "../../components/browse/BrowseSearch";
import { Screen } from "../../components/ui/Screen";

export default function SearchScreen() {
  return (
    <Screen>
      <BrowseHeader />
      <BrowseSearch />
    </Screen>
  );
}
