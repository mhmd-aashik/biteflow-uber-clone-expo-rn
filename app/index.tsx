import { Text, View } from "react-native";
import { Screen } from "../components/ui/Screen";
import { HomeHeader } from "../components/home/HomeHeader";
import { HomeSearch } from "../components/home/HomeSearch";
import { CategorySection } from "../components/home/CategorySection";
import { RestaurantSection } from "../components/home/RestaurantSection";

export default function HomeScreen() {
  return (
    <Screen>
      <HomeHeader />
      <HomeSearch />
      <CategorySection />
      <RestaurantSection />
    </Screen>
  );
}
