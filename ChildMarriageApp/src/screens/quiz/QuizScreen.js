import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Heading, HStack, VStack, Button, ScrollView, Text } from "native-base";
import HelpBar from "../../components/helpBar";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import I18n from "../../i18n";
import QuizAnswers from "./QuizAnswers";

const QuizScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const answers = QuizAnswers[title];
  const total = answers["num"];

  const [points, setPoints] = useState(0);
  const [questionNum, setQuestionNum] = useState(1);

  const answerQuestion = (answer) => {
    if (answer == answers["q" + questionNum]) {
      setPoints(points + 1);
    }

    if (questionNum == total) {
      const navParams = {
        title: title,
        points: points,
        total: total,
      };
      navigation.navigate("QuizResult", navParams);
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  const QuestionBox = () => {
    return (
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
        width="85%"
        rounded="xl"
      >
        <VStack width="100%" space={2} paddingY={3}>
          <Heading textAlign="center" color="primary.800">
            {I18n.t("quiz/" + title + ".q" + questionNum)}
          </Heading>
        </VStack>
      </HStack>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack
          space={2}
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
            <VStack space={2}>{QuestionBox()}</VStack>
          </ScrollView>
          <HStack space={10} justifyContent="center" paddingBottom={5}>
            <TouchableOpacity
              style={styles.true}
              onPress={() => answerQuestion(true)}
            >
              <Entypo name="check" size={60} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.false}
              onPress={() => answerQuestion(false)}
            >
              <Entypo name="cross" size={75} color="white" />
            </TouchableOpacity>
          </HStack>
          <Text alignSelf="center" fontSize={25} paddingBottom={5}>
            {I18n.t("quiz/currpoints") + ": " + points}
          </Text>
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
  true: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    textAlign: "center",
    width: 103,
    height: 88,
  },
  false: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 103,
    height: 88,
  },
});

export default QuizScreen;
