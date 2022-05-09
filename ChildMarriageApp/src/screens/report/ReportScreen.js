import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Heading, HStack, VStack, Button, Box, Image, Text } from "native-base";
import HelpBar from "../../components/helpBar";
import I18n from "../../i18n";

const ReportScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <VStack space={4} width="100%" height="100%" bg="warning.50">
          <HelpBar page="Report" />
          <Heading size="2xl" alignSelf="center">
            Report a case
          </Heading>
          <Box>
            <Text>This functionality will be available soon</Text>
          </Box>
          <HStack paddingTop="5" space={3} style={styles.hstack}>
            <Button
              onPress={() => navigation.navigate("Welcome")}
              size="lg"
              width="2/5"
            >
              {I18n.t("common.quit")}
            </Button>
            <Button
              onPress={() => navigation.navigate("Home")}
              size="lg"
              width="2/5"
              text
            >
              {I18n.t("common.back")}
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

export default ReportScreen;
