import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
