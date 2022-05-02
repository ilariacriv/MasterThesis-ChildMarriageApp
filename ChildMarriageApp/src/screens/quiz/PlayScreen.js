import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  Box,
  Image,
  Text,
  Pressable,
} from "native-base";
import HelpBar from "../../components/helpBar";
import { AntDesign } from "@expo/vector-icons";

const PlayScreen = ({ navigation }) => {
  const images = {
    anne: require("../../../assets/blackgirl.jpeg"),
  };
  const QuizBox = (name, navigationDest, shorttext) => {
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
            <Heading>{name}</Heading>
            <Text>{shorttext}</Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack
          space={2}
          marginTop="10"
          width="100%"
          height="100%"
          bg="warning.50"
        >
          <HelpBar />
          <Heading size="2xl" alignSelf="center">
            Play
          </Heading>
          {QuizBox("Quiz: Education", "EducationQuiz", "Quiz about education")}
          {QuizBox("Quiz: Laws", "EducationQuiz", "Quiz about laws")}
          {QuizBox("Quiz: HIV", "EducationQuiz", "Quiz about HIV and health")}
          <HStack paddingTop="5" space={3} style={styles.hstack}>
            <Button
              onPress={() => navigation.navigate("Welcome")}
              size="lg"
              width="2/5"
            >
              Quit
            </Button>
            <Button
              onPress={() => navigation.navigate("Home")}
              size="lg"
              width="2/5"
              text
            >
              Back
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
