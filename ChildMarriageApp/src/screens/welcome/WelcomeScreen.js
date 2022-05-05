import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import EmergencyCall from "../../components/emergencyCall";
import { VStack, Heading, Button, Box, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Localization from "expo-localization";
import I18n from "../../i18n";

const WelcomeScreen = ({ navigation }) => {
  //const i18n = useNavigationState((state) => state.i18n);
  return (
    <SafeAreaView>
      <VStack
        space={4}
        marginTop="10"
        width="100%"
        height="100%"
        bg="warning.50"
        alignItems="center"
      >
        <EmergencyCall />
        <Heading size="2xl" alignSelf="center">
          {I18n.t("welcomepage.welcome")}!
        </Heading>
        <Box
          margin="15px"
          bg="white"
          borderColor="gray.300"
          borderWidth="1"
          width="5/6"
          alignItems="center"
          padding="20px"
          height="3/6"
          justifyContent="space-between"
        >
          <Text bold fontSize="md" paddingBottom="20px">
            Tutorial here
          </Text>
          <MaterialCommunityIcons
            name="arrow-right-bold-circle"
            size={40}
            color="black"
          />
        </Box>
        <Button
          onPress={() => navigation.navigate("Home")}
          size="lg"
          width="4/5"
          text
        >
          {I18n.t("welcomepage.start")}
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
