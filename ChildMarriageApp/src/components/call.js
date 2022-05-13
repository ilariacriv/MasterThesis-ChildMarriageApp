import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import call from "react-native-phone-call";

const Call = (props) => {
  const triggerCall = () => {
    // Check for perfect 10 digit length
    //   if (inputValue.length != 10) {
    //     alert('Please insert correct contact number');
    //     return;
    //   }
    const args = {
      number: "+243" + props.phoneNumber,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <TouchableOpacity onPress={triggerCall}>
      <Ionicons name="call" size={35} color="black" />
    </TouchableOpacity>
  );
};

export default Call;
