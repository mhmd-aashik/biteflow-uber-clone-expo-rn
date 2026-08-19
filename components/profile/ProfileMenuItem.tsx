import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useFavoritesStore } from "../../store/favorites.store";

type Props = {
  title: string;
  subtitle?: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  badge?: number;
};

export function ProfileMenuItem({
  title,
  subtitle,
  icon,
  onPress,
  badge,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center px-4 py-4 active:opacity-70"
    >
      <View className="h-11 w-11 items-center justify-center rounded-full bg-brand-50">
        <Ionicons name={icon} size={21} color="#FF5A36" />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-base font-semibold text-text-primary">
          {title}
        </Text>

        {subtitle && (
          <Text className="mt-1 text-sm text-text-secondary">{subtitle}</Text>
        )}
      </View>

      {badge !== undefined && badge > 0 && (
        <View className="mr-2 min-w-6 items-center justify-center rounded-full bg-brand-50 px-2 py-1">
          <Text className="text-xs font-bold text-brand-500">{badge}</Text>
        </View>
      )}

      <Ionicons name="chevron-forward" size={20} color="#9A9A9A" />
    </Pressable>
  );
}
