import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import I18n from "../i18n";
import call from "react-native-phone-call";
import AppContext from "./AppContext";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { HStack } from "native-base";

const EmergencyCall = () => {
  const text = I18n.t("common/common.emergencycall");
  const myContext = useContext(AppContext);

  const triggerCall = () => {
    // Check for perfect 10 digit length
    //   if (inputValue.length != 10) {
    //     alert('Please insert correct contact number');
    //     return;
    //   }
    const args = {
      number: "+243" + myContext.emergencyNumber,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={triggerCall}>
      <HStack space={3}>
        <Ionicons name="call" size={70} color="white" />
        <Text numberOfLines={2} adjustsFontSizeToFit style={styles.text}>
          {text}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    //  height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1%",
    alignItems: "center",
    height: responsiveHeight(15),
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 27,
    alignSelf: "center",
  },
});

export default EmergencyCall;
