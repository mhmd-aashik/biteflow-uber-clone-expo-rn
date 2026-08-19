import { Screen } from "../../components/ui/Screen";
import { ProfileHeader } from "../../components/profile/ProfileHeader";
import { ProfileUserCard } from "../../components/profile/ProfileUserCard";

export default function ProfileScreen() {
  return (
    <Screen>
      <ProfileHeader />
      <ProfileUserCard />
    </Screen>
  );
}
