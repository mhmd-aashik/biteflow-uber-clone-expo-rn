import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BiteFlow</Text>
      <Text style={styles.subtitle}>Food delivery, rebuilt properly.</Text>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F9F6",
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
