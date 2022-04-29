import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmergencyCall from "../components/emergencyCall";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EmergencyCall />
        <Text>Welcome!</Text>
        <Button title="Start" onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "green" },
});

export default WelcomeScreen;
