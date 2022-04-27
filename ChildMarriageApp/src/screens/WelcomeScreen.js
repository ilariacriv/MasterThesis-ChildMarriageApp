import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmergencyCall from "../components/emergencyCall";

export default function WelcomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EmergencyCall />
        <Text>WelcomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "green" },
});
