import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import AppContext from "../../components/AppContext";
import EmergencyCall from "../../components/emergencyCall";
import { VStack, Heading, Button, Box, Text, ScrollView } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Localization from "expo-localization";
import I18n from "../../i18n";
import scrollViewStyles from "../../style/globalStyle";

const WelcomeScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);
  I18n.locale = myContext.language;
  return (
    <SafeAreaView>
      <VStack
        space={4}
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
