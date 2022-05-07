import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import {
  Heading,
  HStack,
  VStack,
  Button,
  Box,
  Text,
  Radio,
  Input,
} from "native-base";
import HelpBar from "../../components/helpBar";
import I18n from "../../i18n";
import AppContext from "../../components/AppContext";

const SettingsScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);
  I18n.locale = myContext.language;
  const [localLang, setLocalLang] = React.useState(myContext.language);
  const [localEN, setLocalEN] = React.useState(myContext.emergencyNumber);

  const onSave = () => {
    myContext.updateLanguage(localLang);
    if (localEN.length != 9) {
      alert(I18n.t("settings.alertMessage"));
      return;
    }
    myContext.updateEmergencynumber("+243" + localEN);
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <View>
        <VStack space={2} width="100%" height="100%" bg="warning.50">
          <HelpBar />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common.settings")}
          </Heading>
          <Box paddingY={5} alignItems="center">
            <Text fontSize="xl" paddingBottom={3} bold>
              {I18n.t("settings.lang")}:{" "}
            </Text>
            <Radio.Group
              name="languageGroup"
              accessibilityLabel="language"
              value={localLang}
              onChange={(nextValue) => {
                setLocalLang(nextValue);
              }}
            >
              <Radio value="en" my={1}>
                English
              </Radio>
              <Radio value="fr" my={1}>
                Français
              </Radio>
            </Radio.Group>
          </Box>

          <Box paddingBottom={3} alignItems="center">
            <Text fontSize="xl" bold>
              {I18n.t("settings.enum")}:{" "}
            </Text>
            <Text
              fontSize="lg"
              paddingBottom={3}
              paddingX={3}
              alignContent="center"
            >
              {I18n.t("settings.ecmess")}
            </Text>
            <Text
              fontSize="lg"
              paddingBottom={3}
              paddingX={3}
              alignContent="center"
            >
              {I18n.t("settings.curr")}: {myContext.emergencyNumber}
            </Text>
            <Input
              mx="3"
              placeholder={I18n.t("settings.placeholder")}
              w="70%"
              borderColor="black"
              size="lg"
              keyboardType="numeric"
              onChangeText={(text) => setLocalEN(text)}
            />
          </Box>
          <HStack paddingTop="5" space={3} style={styles.hstack}>
            <Button
              onPress={() => navigation.navigate("Home")}
              size="lg"
              width="2/5"
            >
              {I18n.t("common.back")}
            </Button>
            <Button onPress={onSave} size="lg" width="2/5" text>
              {I18n.t("common.save")}
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

export default SettingsScreen;
