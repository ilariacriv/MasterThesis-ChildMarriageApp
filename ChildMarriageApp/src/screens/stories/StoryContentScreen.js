import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  Image,
  ScrollView,
  Box,
  Text,
} from "native-base";
import I18n from "../../i18n";

const images = {
  s1: require("../../../assets/stories/s1.jpeg"),
};

const StoryContentScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const sid = "s" + id;
  return (
    <SafeAreaView>
      <View>
        <VStack space={1} width="100%" height="100%" bg="warning.50">
          <Heading
            paddingTop={3}
            textAlign="center"
            size="2xl"
            alignSelf="center"
          >
            {I18n.t("stories/" + sid + ".name")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <VStack space={5}>
              <HStack space={1} justifyContent="space-evenly">
                <Image size="xl" source={images[sid]} alt={"img" + id} />
                <Text alignSelf="center" fontSize={25}>
                  {I18n.t("stories/age") +
                    ": " +
                    I18n.t("stories/" + sid + ".age") +
                    "\n" +
                    I18n.t("stories/place") +
                    ": " +
                    I18n.t("stories/" + sid + ".place")}
                </Text>
              </HStack>
              <Box
                space={2}
                bg="white"
                borderColor="primary.600"
                borderWidth="2"
                paddingX="10px"
                paddingY="10px"
                justifyContent="space-around"
                alignSelf="center"
                width="95%"
                rounded="xl"
              >
                <VStack space={2}>
                  <Text fontSize={16}>
                    {I18n.t("stories/" + sid + ".text")}
                  </Text>
                </VStack>
              </Box>
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
              onPress={() => navigation.navigate("Stories")}
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

export default StoryContentScreen;
