import { Platform, StyleSheet, View } from "react-native";
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
  KeyboardAvoidingView,
  ScrollView,
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
    if (localLang != myContext.language) {
      myContext.updateLanguage(localLang);
    }
    if (localEN != myContext.emergencyNumber) {
      var pattern = /^\d{9}$/;
      if (!localEN.match(pattern)) {
        alert(I18n.t("common/settings.alertMessage"));
        return;
      }
      myContext.updateEmergencynumber(localEN);
    }
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <View>
        <VStack space={2} width="100%" height="100%" bg="warning.50">
          <HelpBar page="settings" />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common/common.settings")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <Box paddingY={5} alignItems="center">
              <Text fontSize="xl" paddingBottom={3} bold>
                {I18n.t("common/settings.lang")}:{" "}
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
            <KeyboardAvoidingView
              h={{
                base: "400px",
                lg: "auto",
              }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Box paddingBottom={3} alignItems="center">
                <Text fontSize="xl" bold>
                  {I18n.t("common/settings.enum")}:{" "}
                </Text>
                <Text
                  fontSize="lg"
                  paddingBottom={3}
                  paddingX={3}
                  alignContent="center"
                >
                  {I18n.t("common/settings.ecmess")}
                </Text>
                <Text
                  fontSize="lg"
                  paddingBottom={3}
                  paddingX={3}
                  alignContent="center"
                >
                  {I18n.t("common/settings.curr")}: {myContext.emergencyNumber}
                </Text>
                <Input
                  mx="3"
                  placeholder={I18n.t("common/settings.placeholder")}
                  w="70%"
                  borderColor="black"
                  size="lg"
                  keyboardType="numeric"
                  onChangeText={(text) => setLocalEN(text)}
                />
              </Box>
            </KeyboardAvoidingView>
          </ScrollView>
          <HStack
            paddingTop="3"
            space={3}
            style={styles.hstack}
            paddingBottom="3"
          >
            <Button
              onPress={() => navigation.navigate("Home")}
              size="lg"
              width="2/5"
            >
              {I18n.t("common/common.back")}
            </Button>
            <Button onPress={onSave} size="lg" width="2/5" text>
              {I18n.t("common/common.save")}
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
