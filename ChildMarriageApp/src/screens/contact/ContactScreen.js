import { StyleSheet, TouchableOpacity, View } from "react-native";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Call from "../../components/call";

const ContactScreen = ({ navigation }) => {
  const images = {
    aidprofen: require("../../../assets/aidprofen.png"),
  };

  const ContactBox = (name, phone, address, img) => {
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
        <VStack space={2}>
          <Image size="lg" source={images[img]} alt={name} />
          <HStack justifyContent="center" space={3}>
            <Call phoneNumber={phone} />
          </HStack>
        </VStack>
        <VStack width="65%" space={1}>
          <Heading color="primary.800">{name}</Heading>
          <Text fontSize="md">
            <Text bold>{I18n.t("common/contacts.phone") + ":\n"} </Text>
            {phone}
          </Text>
          <Text fontSize="md">
            <Text bold>{I18n.t("common/contacts.address")}:</Text> {address}
          </Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack space={1} width="100%" height="100%" bg="warning.50">
          <HelpBar page="gethelp" />
          <Heading size="2xl" alignSelf="center">
            {I18n.t("common/contacts.gethelp")}
          </Heading>
          <ScrollView
            _contentContainerStyle={{
              justifyContent: "center",
            }}
          >
            <VStack space={2}>
              {ContactBox(
                "AidProfen",
                "(+243) 811-441-591",
                "N° 19 Av PELICAN, Q.des volcans, C/Goma",
                "aidprofen"
              )}
              {ContactBox(
                "AidProfen",
                "(+243) 811-441-591",
                "N° 19 Av PELICAN, Q.des volcans, C/Goma",
                "aidprofen"
              )}
              {ContactBox(
                "AidProfen",
                "(+243) 811-441-591",
                "N° 19 Av PELICAN, Q.des volcans, C/Goma",
                "aidprofen"
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

export default ContactScreen;
