import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import AppContext from "../../components/AppContext";
import EmergencyCall from "../../components/emergencyCall";
import {
  HStack,
  VStack,
  Button,
  Icon,
  Pressable,
  ScrollView,
} from "native-base";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import HelpBar from "../../components/helpBar";
import I18n from "../../i18n";

const HomeScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);
  I18n.locale = myContext.language;
  const ContentButton = (buttonText, navigationDest, iconName, iconlib) => {
    return (
      <Pressable
        onPress={() => navigation.navigate(navigationDest)}
        bg="coolGray.100"
        rounded="8"
        borderWidth="1"
        style={styles.Homebutton}
      >
        <Icon
          as={iconlib}
          name={iconName}
          size="75"
          color="rgba(20,206,218,1)"
          style={{ textAlign: "center" }}
        />
        <Text style={styles.Txt248}>{I18n.t("home." + buttonText)}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <VStack space={2} width="100%" height="100%" bg="warning.50">
        <EmergencyCall />
        <HelpBar />
        <ScrollView
          _contentContainerStyle={{
            justifyContent: "center",
          }}
        >
          <VStack space={2}>
            <HStack space={3} style={styles.hstack}>
              {ContentButton("learn", "Learn", "book", FontAwesome5)}
              {ContentButton(
                "stories",
                "Stories",
                "face-woman",
                MaterialCommunityIcons
              )}
            </HStack>
            <HStack space={3} style={styles.hstack}>
              {ContentButton("gethelp", "Contact", "address", Entypo)}
              {ContentButton("play", "Play", "football", Ionicons)}
            </HStack>
            <HStack space={3} style={styles.hstack}>
              {ContentButton(
                "report",
                "Report",
                "report-problem",
                MaterialIcons
              )}
              {ContentButton(
                "ask",
                "Questions",
                "comment-question",
                MaterialCommunityIcons
              )}
            </HStack>
          </VStack>
        </ScrollView>
        <HStack space={3} style={styles.hstack} paddingBottom="3">
          <Button
            onPress={() => navigation.navigate("Welcome")}
            size="lg"
            width="2/5"
          >
            {I18n.t("common.quit")}
          </Button>
          <Button
            onPress={() => navigation.navigate("Settings")}
            size="lg"
            width="2/5"
            text
          >
            {I18n.t("common.settings")}
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
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 40,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)), linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(20,206,218,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 149,
    height: 160,
  },
  Txt248: {
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.4,
    color: "rgba(20,206,218,1)",
    textAlign: "center",
    justifyContent: "center",
    height: 58,
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
