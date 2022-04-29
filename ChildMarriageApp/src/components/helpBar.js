import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { HStack } from "native-base";

const HelpBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <FontAwesome5
        name="assistive-listening-systems"
        size={50}
        color="black"
      />
      <Entypo name="help-with-circle" size={50} color="black" />
    </HStack>
  );
};

export default HelpBar;
