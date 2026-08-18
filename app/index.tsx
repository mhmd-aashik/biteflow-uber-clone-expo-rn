import { ScrollView, Text, View } from "react-native";
import { Screen } from "../components/ui/Screen";
import { HomeHeader } from "../components/home/HomeHeader";
import { HomeSearch } from "../components/home/HomeSearch";
import { CategorySection } from "../components/home/CategorySection";
import { RestaurantSection } from "../components/home/RestaurantSection";

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-8"
      >
        <HomeHeader />
        <HomeSearch />
        <CategorySection />
        <RestaurantSection />
      </ScrollView>
    </Screen>
  );
}
