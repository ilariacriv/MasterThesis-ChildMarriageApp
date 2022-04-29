import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>SettingsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "green" },
});

export default SettingsScreen;
