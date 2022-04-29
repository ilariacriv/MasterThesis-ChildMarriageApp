import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EmergencyCall = () => {
  const text = "Emergency\nCall";
  return (
    <View style={styles.button}>
      <Ionicons name="call" size={70} color="white" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "1%",
    alignContent: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    alignSelf: "center",
  },
});

export default EmergencyCall;
