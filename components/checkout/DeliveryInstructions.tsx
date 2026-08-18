import { Text, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export function DeliveryInstructions({ value, onChangeText }: Props) {
  return (
    <View className="mx-5 mt-6">
      <Text className="text-lg font-bold text-text-primary">
        Delivery instructions
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Add delivery instructions"
        placeholderTextColor="#9A9A9A"
        multiline
        className="mt-3 min-h-24 rounded-2xl bg-white p-4 text-base text-text-primary"
        textAlignVertical="top"
      />
    </View>
  );
}
