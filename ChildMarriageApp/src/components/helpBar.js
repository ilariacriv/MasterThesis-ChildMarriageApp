import React, { useState, useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { HStack, Pressable, ScrollView, VStack } from "native-base";
import { Overlay, Text, Button } from "@rneui/base";
import { StyleSheet, TouchableOpacity } from "react-native";
import I18n from "../i18n";
import { Audio } from "expo-av";
import AppContext from "./AppContext";

const HelpBar = (props) => {
  const [visible, setVisible] = useState(false);
  const [sound, setSound] = React.useState();
  const [soundOn, setSoundOn] = React.useState(false);
  const myContext = useContext(AppContext);
  const language = myContext.language == "fr" ? "fr" : "en";

  const audiourls =
    language == "en"
      ? {
          home: require("../../audios/en/home.mp4"),
          learn: require("../../audios/en/noAudio.mp4"),
          stories: require("../../audios/en/noAudio.mp4"),
          gethelp: require("../../audios/en/noAudio.mp4"),
          report: require("../../audios/en/noAudio.mp4"),
          play: require("../../audios/en/noAudio.mp4"),
          ask: require("../../audios/en/noAudio.mp4"),
          learncontent: require("../../audios/en/noAudio.mp4"),
          settings: require("../../audios/en/noAudio.mp4"),
          quiz: require("../../audios/en/noAudio.mp4"),
        }
      : {
          home: require("../../audios/en/noAudio.mp4"),
          learn: require("../../audios/en/noAudio.mp4"),
          stories: require("../../audios/en/noAudio.mp4"),
          gethelp: require("../../audios/en/noAudio.mp4"),
          report: require("../../audios/en/noAudio.mp4"),
          play: require("../../audios/en/noAudio.mp4"),
          ask: require("../../audios/en/noAudio.mp4"),
          learncontent: require("../../audios/en/noAudio.mp4"),
          settings: require("../../audios/en/noAudio.mp4"),
          quiz: require("../../audios/en/noAudio.mp4"),
        };

  async function playSound() {
    if (!soundOn) {
      //   console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(audiourls[props.page]);
      setSound(sound);
      setSoundOn(true);
      await sound.playAsync();
    } else {
      await sound.stopAsync();
      setSoundOn(false);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          //    console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <TouchableOpacity onPress={playSound}>
        <FontAwesome5
          name="assistive-listening-systems"
          size={50}
          color="black"
        />
      </TouchableOpacity>
      <Pressable>
        <TouchableOpacity onPress={toggleOverlay}>
          <Entypo name="help-with-circle" size={50} color="black" />
        </TouchableOpacity>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={styles.overlay}
        >
          <VStack space={5} height="full">
            <Text style={styles.textPrimary}>
              {I18n.t("common/common.hello")}!
            </Text>

            <ScrollView
              _contentContainerStyle={{
                justifyContent: "center",
              }}
            >
              <Text style={styles.textSecondary}>
                {I18n.t("common/help." + props.page)}
              </Text>
            </ScrollView>

            <Button
              title={I18n.t("common/help.close")}
              onPress={toggleOverlay}
            />
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
