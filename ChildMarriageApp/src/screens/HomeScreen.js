import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmergencyCall from "../components/emergencyCall";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <EmergencyCall />
        <Text>HomeScreen</Text>
      </View>
      <Button title="Learn" onPress={() => navigation.navigate("Learn")} />
      <Button title="Stories" onPress={() => navigation.navigate("Stories")} />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} />
      <Button title="Play" onPress={() => navigation.navigate("Play")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "green" },
});

export default HomeScreen;
