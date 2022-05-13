import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  ScrollView,
  Box,
  Text,
} from "native-base";
import HelpBar from "../../components/helpBar";
import I18n from "../../i18n";

const questionNumber = {
  cm: 2,
};

const LearnContentScreen = ({ route, navigation }) => {
  const { title } = route.params;

  const QuestionBox = (id) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
      <Box
        key={id}
        space={2}
        bg="white"
        borderColor="primary.600"
        borderWidth="2"
        paddingX="5px"
        paddingY="10px"
        justifyContent="space-around"
        alignSelf="center"
        width="95%"
        rounded="xl"
      >
        <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)}>
          <Heading color="primary.800" size="md">
            {I18n.t(title + "/q" + id + ".q")}
          </Heading>
          {showAnswer ? (
            <Text paddingTop={2} fontSize={16}>
              {I18n.t(title + "/q" + id + ".r")}
            </Text>
          ) : null}
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack space={4} width="100%" height="100%" bg="warning.50">
          <HelpBar page="questions" />
          <Heading textAlign="center" size="2xl" alignSelf="center">
            {I18n.t(title + "/title")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <VStack space={2}>
              {Array.from(Array(questionNumber[title])).map((x, index) =>
                QuestionBox(index + 1)
              )}
            </VStack>
          </ScrollView>
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
              onPress={() => navigation.navigate("Learn")}
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

export default LearnContentScreen;
