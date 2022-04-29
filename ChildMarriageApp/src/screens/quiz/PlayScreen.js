import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const PlayScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>PlayScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "green" },
});

export default PlayScreen;
