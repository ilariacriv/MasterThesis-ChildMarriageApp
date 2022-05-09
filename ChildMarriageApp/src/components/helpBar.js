import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { HStack, Pressable, ScrollView, VStack } from "native-base";
import { Overlay, Text, Button } from "@rneui/base";
import { StyleSheet } from "react-native";
import I18n from "../i18n";

const HelpBar = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <FontAwesome5
        name="assistive-listening-systems"
        size={50}
        color="black"
      />
      <Pressable onPress={toggleOverlay}>
        <Entypo name="help-with-circle" size={50} color="black" />
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={styles.overlay}
        >
          <VStack space={5} height="full">
            <Text style={styles.textPrimary}>Hello!</Text>

            <ScrollView
              _contentContainerStyle={{
                justifyContent: "center",
              }}
            >
              <Text style={styles.textSecondary}>
                {I18n.t("help." + props.page)}
              </Text>
            </ScrollView>

            <Button title={I18n.t("help.close")} onPress={toggleOverlay} />
          </VStack>
        </Overlay>
      </Pressable>
    </HStack>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 40,
  },
  textPrimary: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
  overlay: {
    backgroundColor: "white",
    color: "white",
    marginHorizontal: 10,
    maxHeight: "80%",
    width: "90%",
  },
});

export default HelpBar;
