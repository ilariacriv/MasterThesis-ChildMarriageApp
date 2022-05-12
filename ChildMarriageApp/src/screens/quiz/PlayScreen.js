import { I18nManager, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  Text,
  Pressable,
  ScrollView,
} from "native-base";
import HelpBar from "../../components/helpBar";
import { AntDesign } from "@expo/vector-icons";
import I18n from "../../i18n";

const PlayScreen = ({ navigation }) => {
  const images = {
    anne: require("../../../assets/blackgirl.jpeg"),
  };
  const QuizBox = (name, navigationDest) => {
    return (
      <Pressable onPress={() => navigation.navigate(navigationDest)}>
        <HStack
          space={2}
          bg="white"
          borderColor="gray.300"
          borderWidth="1"
          alignItems="center"
          paddingX="5px"
          paddingY="10px"
          justifyContent="space-around"
          alignSelf="center"
          width="95%"
        >
          <AntDesign name="play" size={90} color="green" />
          <VStack width="65%" space={1}>
            <Heading>
              {I18n.t("common/play.quiz") +
                ": " +
                I18n.t("common/learn." + name)}
            </Heading>
          </VStack>
        </HStack>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack space={2} width="100%" height="100%" bg="warning.50">
          <HelpBar page="play" />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common/home.play")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <VStack space={2}>
              {QuizBox("edu", "Play")}
              {QuizBox("laws", "Play")}
              {QuizBox("srh", "Play")}
            </VStack>
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
});

export default PlayScreen;
