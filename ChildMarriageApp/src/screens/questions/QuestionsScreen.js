import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  Box,
  ScrollView,
  Text,
  Center,
} from "native-base";
import HelpBar from "../../components/helpBar";
import I18n from "../../i18n";

const QuestionsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <VStack space={4} width="100%" height="100%" bg="warning.50">
          <HelpBar page="questions" />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common/home.ask")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <Box>
              <Center>
                <Text paddingX={3} fontSize={25}>
                  {I18n.t("common/questions.NA")}
                </Text>
              </Center>
            </Box>
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

export default QuestionsScreen;
