import { StyleSheet, TouchableOpacity } from "react-native";
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
  Text,
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
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

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
        <TouchableOpacity onPress={() => navigation.navigate(navigationDest)}>
          <Icon
            as={iconlib}
            name={iconName}
            size="75"
            color="rgba(20,206,218,1)"
            alignSelf="center"
            style={{ textAlign: "center" }}
          />
          <Text
            paddingTop={3}
            numberOfLines={2}
            adjustsFontSizeToFit
            style={styles.Txt248}
          >
            {I18n.t("common/home." + buttonText)}
          </Text>
        </TouchableOpacity>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <VStack space={2} width="100%" height="100%" bg="warning.50">
        <EmergencyCall />
        <HelpBar page="home" />
        <ScrollView
          _contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            flexDirection: "column",
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
                "reportn",
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
            {I18n.t("common/common.quit")}
          </Button>
          <Button
            onPress={() => navigation.navigate("Settings")}
            size="lg"
            width="2/5"
          >
            {I18n.t("common/common.settings")}
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
    width: responsiveWidth(45),
    height: responsiveWidth(50),
  },
  Txt248: {
    fontSize: responsiveScreenFontSize(2.7),
    fontWeight: "700",
    letterSpacing: -0.4,
    color: "rgba(20,206,218,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
