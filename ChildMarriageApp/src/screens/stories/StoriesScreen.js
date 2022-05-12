import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  ScrollView,
  Image,
  Text,
} from "native-base";
import HelpBar from "../../components/helpBar";
import I18n from "../../i18n";

const StoriesScreen = ({ navigation }) => {
  const images = {
    anne: require("../../../assets/blackgirl.jpeg"),
  };
  const StoryBox = (name, navigationDest, shorttext, img) => {
    return (
      <HStack
        space={2}
        margin="15px"
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
        <Image size="lg" source={images[img]} alt={name} />
        <VStack width="65%" space={1}>
          <Heading>{name}</Heading>
          <Text>{shorttext}</Text>
          <Button size="sm" onPress={() => navigation.navigate(navigationDest)}>
            {I18n.t("common/stories.open")}
          </Button>
        </VStack>
      </HStack>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack space={4} width="100%" height="100%" bg="warning.50">
          <HelpBar page="stories" />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common/home.stories")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <VStack space={2}>
              {StoryBox(
                "Anne",
                "Anne",
                "Anne was 13 years old when she got married...",
                "anne"
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

export default StoriesScreen;
