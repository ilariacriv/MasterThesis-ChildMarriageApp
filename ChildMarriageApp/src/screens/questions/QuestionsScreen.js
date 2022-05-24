import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  Box,
  ScrollView,
  Text,
  Center,
  Pressable,
  Icon,
} from "native-base";
import HelpBar from "../../components/helpBar";
import { Entypo } from "@expo/vector-icons";
import I18n from "../../i18n";
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const QuestionsScreen = ({ navigation }) => {
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
    <SafeAreaView>
      <View>
        <VStack space={4} width="100%" height="100%" bg="warning.50">
          <HelpBar page="questions" />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common/home.ask")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <Box>
              <Center>
                <Text paddingX={3} fontSize={22}>
                  {I18n.t("common/questions.NA")}
                </Text>
              </Center>
            </Box>
            <Center paddingTop={5}>
              {ContentButton("gethelp", "Contact", "address", Entypo)}
            </Center>
          </ScrollView>
          <HStack
            paddingTop="2"
            space={3}
            style={styles.hstack}
            paddingBottom="3"
          >
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
      </View>
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
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.4,
    color: "rgba(20,206,218,1)",
    textAlign: "center",
    justifyContent: "center",
    height: 58,
  },
});

export default QuestionsScreen;
