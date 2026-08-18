import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>biteflow</Text>

        <Text style={styles.subtitle}>Food delivery, rebuilt properly.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9F6",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#171717",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#777777",
  },
});
