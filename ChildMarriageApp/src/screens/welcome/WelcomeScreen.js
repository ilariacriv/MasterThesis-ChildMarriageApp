import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import AppContext from "../../components/AppContext";
import EmergencyCall from "../../components/emergencyCall";
import { VStack, Heading, Button, Box, Text, HStack, Image } from "native-base";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import I18n from "../../i18n";
import { StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);
  I18n.locale = myContext.language;

  const [num, setNum] = React.useState(1);

  const getContent = () => {
    if (num == 1) {
      return (
        <Box alignItems="center" justifyContent="space-between" height="full">
          <VStack height="80%" justifyContent="center">
            <Text bold fontSize="md" paddingBottom="20px" textAlign="center">
              {I18n.t("common/tutorial.slide1_1")}
            </Text>
            <Text bold fontSize="md" paddingBottom="20px" textAlign="center">
              {I18n.t("common/tutorial.slide1_2")}
            </Text>
          </VStack>
          <TouchableOpacity onPress={() => setNum(num + 1)}>
            <MaterialCommunityIcons
              name="arrow-right-bold-circle"
              size={50}
              color="black"
              alignSelf="flex-end"
            />
          </TouchableOpacity>
        </Box>
      );
    }
    if (num == 2) {
      return (
        <VStack
          alignItems="center"
          justifyContent="space-between"
          height="full"
          width="full"
          space={4}
        >
          <VStack height="80%" justifyContent="center" space={5} width="full">
            <Text bold fontSize="md" textAlign="center">
              {I18n.t("common/tutorial.slide2_1")}
            </Text>
            <HStack
              space={1}
              justifyContent="space-evenly"
              alignContent="center"
            >
              <Text bold fontSize="sm" textAlign="center" width="80%">
                {I18n.t("common/tutorial.slide2_2")}
              </Text>
              <Entypo name="help-with-circle" size={50} color="black" />
            </HStack>
            <HStack space={1} alignContent="center">
              <Text bold fontSize="sm" textAlign="center" width="80%">
                {I18n.t("common/tutorial.slide2_3")}
              </Text>
              <FontAwesome5
                name="assistive-listening-systems"
                size={50}
                color="black"
              />
            </HStack>
          </VStack>
          <HStack space={7}>
            <TouchableOpacity onPress={() => setNum(num - 1)}>
              <MaterialCommunityIcons
                name="arrow-left-bold-circle"
                size={50}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNum(num + 1)}>
              <MaterialCommunityIcons
                name="arrow-right-bold-circle"
                size={50}
                color="black"
              />
            </TouchableOpacity>
          </HStack>
        </VStack>
      );
    }
    if (num == 3) {
      return (
        <Box alignItems="center" justifyContent="space-between" height="full">
          <VStack height="80%" justifyContent="center">
            <Text bold fontSize="md" textAlign="center">
              {I18n.t("common/tutorial.slide3")}
            </Text>
            <Image
              source={require("../../../assets/tutorial3.png")}
              alt="tutorialImg"
              resizeMode={"contain"}
              height="50%"
            />
          </VStack>
          <HStack space={7}>
            <TouchableOpacity onPress={() => setNum(num - 1)}>
              <MaterialCommunityIcons
                name="arrow-left-bold-circle"
                size={50}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNum(num + 1)}>
              <MaterialCommunityIcons
                name="arrow-right-bold-circle"
                size={50}
                color="black"
              />
            </TouchableOpacity>
          </HStack>
        </Box>
      );
    }
    if (num == 4) {
      return (
        <Box alignItems="center" justifyContent="space-between" height="full">
          <VStack height="80%" justifyContent="center" space={4}>
            <Text bold fontSize="md" paddingBottom="20px" textAlign="center">
              {I18n.t("common/tutorial.slide4")}
            </Text>
          </VStack>
          <TouchableOpacity onPress={() => setNum(num - 1)}>
            <MaterialCommunityIcons
              name="arrow-left-bold-circle"
              size={50}
              color="black"
            />
          </TouchableOpacity>
        </Box>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <VStack
        space={4}
        width="100%"
        height="100%"
        bg="warning.50"
        alignItems="center"
        flex={1}
      >
        <EmergencyCall />
        <Heading size="2xl" alignSelf="center" flex={0.7}>
          {I18n.t("common/welcomepage.welcome")}!
        </Heading>

        <Box
          bg="white"
          borderColor="gray.300"
          borderWidth="1"
          width="90%"
          alignItems="center"
          padding="20px"
          justifyContent="space-between"
          flex={5}
        >
          {getContent()}
        </Box>
        <Button
          onPress={() => setNum(1) || navigation.navigate("Home")}
          size="lg"
          width="4/5"
          flex={1}
          marginBottom="3"
        >
          {I18n.t("common/welcomepage.start")}
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
