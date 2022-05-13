import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  Icon,
  Pressable,
  ScrollView,
} from "native-base";
import {
  Ionicons,
  Foundation,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons,
  Entypo,
} from "@expo/vector-icons";

import HelpBar from "../../components/helpBar";
import I18n from "../../i18n";

const LearnScreen = ({ navigation }) => {
  const ContentButton = (buttonText, navigationDest, iconName, iconlib) => {
    const navParams = {
      title: navigationDest,
    };
    return (
      <Pressable
        onPress={() => navigation.navigate("LearnContent", navParams)}
        bg="coolGray.100"
        rounded="8"
        borderWidth="1"
        alignItems="center"
        style={styles.Homebutton}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("LearnContent", navParams)}
        >
          <Icon
            as={iconlib}
            name={iconName}
            size="78"
            color="rgba(20,206,218,1)"
            alignSelf="center"
            style={{ textAlign: "center" }}
          />
          <Text style={styles.Txt248}>
            {I18n.t("common/learn." + buttonText)}
          </Text>
        </TouchableOpacity>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <VStack width="100%" height="100%" bg="warning.50">
        <HelpBar page="learn" />
        <Heading size="2xl" alignSelf="center">
          {I18n.t("common/home.learn")}
        </Heading>
        <ScrollView
          _contentContainerStyle={{
            justifyContent: "center",
          }}
        >
          <VStack space={2} paddingY={3}>
            <HStack space={3} style={styles.hstack}>
              {ContentButton("edu", "edu", "school", Ionicons)}
              {ContentButton("laws", "laws", "law", Octicons)}
            </HStack>
            <HStack space={3} style={styles.hstack}>
              {ContentButton("srh", "srh", "stethoscope", FontAwesome)}
              {ContentButton(
                "sexuality",
                "sexuality",
                "female-symbol",
                Foundation
              )}
            </HStack>
            <HStack space={3} style={styles.hstack}>
              {ContentButton(
                "cm",
                "cm",
                "human-male-girl",
                MaterialCommunityIcons
              )}
              {ContentButton("menstruations", "menstruations", "drop", Entypo)}
            </HStack>
            <HStack space={3} style={styles.hstack}>
              {ContentButton("questions", "commquest", "question", FontAwesome)}
            </HStack>
          </VStack>
        </ScrollView>
        <HStack paddingY="2" space={3} style={styles.hstack}>
          <Button
            onPress={() => navigation.navigate("Welcome")}
            size="lg"
            width="2/5"
          >
            {I18n.t("common/common.quit")}
          </Button>
          <Button
            onPress={() => navigation.navigate("Home")}
            size="lg"
            width="2/5"
            text
          >
            {I18n.t("common/common.back")}
          </Button>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hstack: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  Homebutton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 10,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 40,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)), linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(20,206,218,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 159,
    height: 180,
  },
  Txt248: {
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.4,
    color: "rgba(20,206,218,1)",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default LearnScreen;
