import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmergencyCall from "../components/emergencyCall";

const LearnScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>LearnScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "green" },
});

export default LearnScreen;
