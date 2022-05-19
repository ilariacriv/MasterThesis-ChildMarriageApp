import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Heading, HStack, VStack, Button, ScrollView } from "native-base";
import HelpBar from "../../components/helpBar";
import { AntDesign } from "@expo/vector-icons";
import I18n from "../../i18n";

const PlayScreen = ({ navigation }) => {
  const QuizBox = (name) => {
    const navParams = {
      title: name,
    };
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Quiz", navParams)}>
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
          width="95%"
          rounded="xl"
        >
          <AntDesign name="play" size={80} color="green" />
          <VStack width="70%" space={1}>
            <Heading color="primary.800">
              {I18n.t("common/play.quiz") +
                ": " +
                I18n.t("common/learn." + name)}
            </Heading>
          </VStack>
        </HStack>
      </TouchableOpacity>
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
              {QuizBox("edu")}
              {QuizBox("laws")}
              {QuizBox("srh")}
              {QuizBox("sexuality")}
              {QuizBox("cm")}
              {QuizBox("menstruations")}
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
