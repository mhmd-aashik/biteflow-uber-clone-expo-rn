import { Screen } from "../../components/ui/Screen";
import { ProfileHeader } from "../../components/profile/ProfileHeader";
import { ProfileUserCard } from "../../components/profile/ProfileUserCard";
import { ProfileMenuItem } from "../../components/profile/ProfileMenuItem";
import { ProfileMenuSection } from "../../components/profile/ProfileMenuSection";
import { ProfileSupportSection } from "../../components/profile/ProfileSupportSection";
import { ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <ProfileHeader />

        <ProfileUserCard />

        <ProfileMenuSection />

        <ProfileSupportSection />
      </ScrollView>
    </Screen>
  );
}
