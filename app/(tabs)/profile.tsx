import { Screen } from "../../components/ui/Screen";
import { ProfileHeader } from "../../components/profile/ProfileHeader";
import { ProfileUserCard } from "../../components/profile/ProfileUserCard";
import { ProfileMenuItem } from "../../components/profile/ProfileMenuItem";

export default function ProfileScreen() {
  return (
    <Screen>
      <ProfileHeader />
      <ProfileUserCard />

      <ProfileMenuItem
        title="Your orders"
        subtitle="View your order history"
        icon="receipt-outline"
      />

      <ProfileMenuItem
        title="Addresses"
        subtitle="Manage delivery addresses"
        icon="location-outline"
      />
    </Screen>
  );
}
