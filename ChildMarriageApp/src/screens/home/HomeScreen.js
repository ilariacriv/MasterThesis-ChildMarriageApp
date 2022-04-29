import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmergencyCall from "../../components/emergencyCall";
import { Heading, HStack, VStack, Button, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import HelpBar from "../../components/helpBar";

const HomeScreen = ({ navigation }) => {
  const ContentButton = (buttonText, navigationDest, iconName, iconlib) => {
    return (
      <Pressable
        onPress={() => navigation.navigate(navigationDest)}
        bg="coolGray.100"
        rounded="8"
        borderWidth="1"
        alignItems="center"
        style={styles.Homebutton}
      >
        <Icon
          as={iconlib}
          name={iconName}
          size="75"
          color="rgba(20,206,218,1)"
        />
        <Text style={styles.Txt248}>{buttonText}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack
          space={4}
          marginTop="10"
          width="100%"
          height="100%"
          bg="warning.50"
        >
          <EmergencyCall />
          <HelpBar />
          <Heading size="2xl" alignSelf="center">
            Home Screen
          </Heading>
          <HStack space={3} style={styles.hstack}>
            {ContentButton("Learn", "Learn", "book", FontAwesome5)}
            {ContentButton(
              "Stories",
              "Stories",
              "face-woman",
              MaterialCommunityIcons
            )}
          </HStack>
          <HStack space={3} style={styles.hstack}>
            {ContentButton("Get Help", "Contact", "address", Entypo)}
            {ContentButton("Play", "Play", "football", Ionicons)}
          </HStack>

          <HStack paddingTop="5" space={3} style={styles.hstack}>
            <Button
              onPress={() => navigation.navigate("Welcome")}
              size="lg"
              width="2/5"
            >
              Quit
            </Button>
            <Button
              onPress={() => navigation.navigate("Settings")}
              size="lg"
              width="2/5"
              text
            >
              Settings
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 10,
    paddingLeft: 13,
    paddingRight: 12,
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
    height: 150,
  },
  Txt248: {
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.4,
    color: "rgba(20,206,218,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 120,
    height: 38,
  },
});

export default HomeScreen;
