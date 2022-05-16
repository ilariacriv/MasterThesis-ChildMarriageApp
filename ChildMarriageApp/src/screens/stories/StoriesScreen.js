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
    s1: require("../../../assets/stories/s1.jpeg"),
  };
  const StoryBox = (id) => {
    const navParams = {
      id: id,
    };
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
        width="95%"
        rounded="xl"
      >
        <Image size="lg" source={images["s" + id]} alt={"img" + id} />
        <VStack width="65%" space={1}>
          <Heading color="primary.800">
            {" "}
            {I18n.t("stories/s" + id + ".name")}
          </Heading>
          <Text numberOfLines={2}> {I18n.t("stories/s" + id + ".text")}</Text>
          <Button
            size="sm"
            onPress={() => navigation.navigate("StoryContent", navParams)}
          >
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
            <VStack space={2}>{StoryBox(1)}</VStack>
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
