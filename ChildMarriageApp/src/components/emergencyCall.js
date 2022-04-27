import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const EmergencyCall = () => {
  const text = "Emergency Call";
  return (
    <View style={styles.button}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    height: 100,
  },
});

export default EmergencyCall;
