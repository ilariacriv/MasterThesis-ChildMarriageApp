import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Heading, HStack, VStack, Button, ScrollView, Text } from "native-base";
import HelpBar from "../../components/helpBar";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import I18n from "../../i18n";
import QuizAnswers from "./QuizAnswers";

const QuizResultScreen = ({ route, navigation }) => {
  const { title, points, total } = route.params;
  const navParams = {
    title: title,
  };

  return (
    <SafeAreaView>
      <View>
        <VStack
          space={4}
          width="100%"
          height="100%"
          bg="warning.50"
          justifyContent="center"
        >
          <HelpBar page="quiz" />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common/play.quiz") +
              ": " +
              I18n.t("common/learn." + title)}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <VStack space={5} alignItems="center" paddingTop={3}>
              <HStack
                space={2}
                bg="white"
                borderColor="primary.600"
                borderWidth="1"
                alignItems="center"
                paddingX="5px"
                paddingY="10px"
                justifyContent="space-around"
                alignSelf="center"
                width="70%"
                rounded="xl"
              >
                <VStack width="100%" space={2} paddingY={3}>
                  <Heading textAlign="center" color="primary.800">
                    {I18n.t("quiz/score") + ": \n\n" + +points + "/" + total}
                  </Heading>
                </VStack>
              </HStack>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("LearnContent", navParams)}
              >
                <Text
                  textAlign="center"
                  fontSize={25}
                  paddingX={5}
                  paddingY={5}
                  color="white"
                  bold
                >
                  {I18n.t("quiz/learnmore")}
                </Text>
              </TouchableOpacity>
            </VStack>
          </ScrollView>
          <HStack space={10} justifyContent="center" paddingBottom={5}></HStack>
          <HStack
            paddingTop="2"
            space={3}
            style={styles.hstack}
            paddingBottom="3"
          >
            <Button
              onPress={() => navigation.navigate("Home")}
              size="lg"
              width="2/5"
            >
              {I18n.t("common/common.home")}
            </Button>
            <Button
              onPress={() => navigation.navigate("Play")}
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0e7490",
    textAlign: "center",
    width: "70%",

    borderRadius: 10,
  },
});

export default QuizResultScreen;
