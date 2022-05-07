import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import I18n from "../i18n";
import call from "react-native-phone-call";
import { Pressable } from "native-base";
import AppContext from "./AppContext";

const EmergencyCall = () => {
  const text = I18n.t("common.emergencycall");
  const myContext = useContext(AppContext);

  const triggerCall = () => {
    // Check for perfect 10 digit length
    //   if (inputValue.length != 10) {
    //     alert('Please insert correct contact number');
    //     return;
    //   }
    const args = {
      number: myContext.emergencyNumber,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <Pressable style={styles.button} onPress={triggerCall}>
      <Ionicons name="call" size={70} color="white" />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    //  height: 100,
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
