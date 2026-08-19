import { View } from "react-native";
import { ProfileMenuItem } from "./ProfileMenuItem";

export function ProfileSupportSection() {
  return (
    <View className="mx-5 mt-6 overflow-hidden rounded-3xl bg-white">
      <ProfileMenuItem
        title="Settings"
        subtitle="Notifications and app preferences"
        icon="settings-outline"
      />

      <View className="mx-4 h-px bg-gray-100" />

      <ProfileMenuItem
        title="Help & Support"
        subtitle="Get help with BiteFlow"
        icon="help-circle-outline"
      />

      <View className="mx-4 h-px bg-gray-100" />

      <ProfileMenuItem
        title="About"
        subtitle="Learn more about BiteFlow"
        icon="information-circle-outline"
      />
    </View>
  );
}
