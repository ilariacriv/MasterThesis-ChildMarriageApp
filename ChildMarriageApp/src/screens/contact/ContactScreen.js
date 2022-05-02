import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { Heading, HStack, VStack, Button, Box, Image, Text } from "native-base";
import HelpBar from "../../components/helpBar";

const ContactScreen = ({ navigation }) => {
  const images = {
    aidprofen: require("../../../assets/aidprofen.png"),
  };
  const ContactBox = (name, phone, address, img) => {
    return (
      <HStack
        space={2}
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
          <Text fontSize="md">
            <Text bold>Phone: </Text>
            {phone}
          </Text>
          <Text fontSize="md">
            <Text bold>Address:</Text> {address}
          </Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <VStack
          space={2}
          marginTop="10"
          width="100%"
          height="100%"
          bg="warning.50"
        >
          <HelpBar />
          <Heading size="2xl" alignSelf="center">
            Get Help
          </Heading>
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
          <HStack paddingTop="5" space={3} style={styles.hstack}>
            <Button
              onPress={() => navigation.navigate("Welcome")}
              size="lg"
              width="2/5"
            >
              Quit
            </Button>
            <Button
              onPress={() => navigation.navigate("Home")}
              size="lg"
              width="2/5"
              text
            >
              Back
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
