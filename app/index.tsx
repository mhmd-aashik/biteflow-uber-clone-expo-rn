import { Text, View } from "react-native";
import { Screen } from "../components/ui/Screen";
import { HomeHeader } from "../components/home/HomeHeader";
import { HomeSearch } from "../components/home/HomeSearch";

export default function HomeScreen() {
  return (
    <Screen>
      <HomeHeader />
      <HomeSearch />
    </Screen>
  );
}
