import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import AppContext from "../../components/AppContext";
import EmergencyCall from "../../components/emergencyCall";
import {
  VStack,
  Heading,
  Button,
  Box,
  Text,
  HStack,
  Image,
  ScrollView,
} from "native-base";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import I18n from "../../i18n";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const WelcomeScreen = ({ navigation }) => {
  const myContext = useContext(AppContext);
  I18n.locale = myContext.language;

  const [num, setNum] = React.useState(1);

  const getContent = () => {
    if (num == 1) {
      return (
        <VStack justifyContent="center">
          <Text bold fontSize={19} textAlign="center">
            {I18n.t("common/tutorial.slide1_1") + "\n"}
          </Text>
          <Text bold fontSize={19} textAlign="center">
            {I18n.t("common/tutorial.slide1_2")}
          </Text>
        </VStack>
      );
    }
    if (num == 2) {
      return (
        <VStack alignItems="center" justifyContent="center" space={3}>
          <Text bold fontSize={18} textAlign="center">
            {I18n.t("common/tutorial.slide2_1")}
          </Text>
          <HStack
            space={1}
            justifyContent="space-evenly"
            alignContent="center"
            alignItems="center"
          >
            <Text bold fontSize={18} textAlign="center" width="80%">
              {I18n.t("common/tutorial.slide2_2")}
            </Text>
            <Entypo name="help-with-circle" size={50} color="black" />
          </HStack>
          <HStack space={1} alignContent="center" alignItems="center">
            <Text bold fontSize={18} textAlign="center" width="80%">
              {I18n.t("common/tutorial.slide2_3")}
            </Text>
            <FontAwesome5
              name="assistive-listening-systems"
              size={50}
              color="black"
            />
          </HStack>
        </VStack>
      );
    }
    if (num == 3) {
      return (
        <VStack justifyContent="center" alignItems="center">
          <Text bold fontSize={19} textAlign="center">
            {I18n.t("common/tutorial.slide3")}
          </Text>
          <Image
            source={require("../../../assets/tutorial3.png")}
            alt="tutorialImg"
            resizeMode={"contain"}
            height={responsiveWidth(50)}
          />
        </VStack>
      );
    }

    if (num == 4 || num == 5 || num == 6) {
      return (
        <VStack justifyContent="center" space={4}>
          <Text bold fontSize={19} textAlign="center">
            {I18n.t("common/tutorial.slide" + num)}
          </Text>
        </VStack>
      );
    }
  };

  const getArrows = () => {
    if (num == 1) {
      return (
        <HStack space={7}>
          <TouchableOpacity onPress={() => setNum(num + 1)}>
            <MaterialCommunityIcons
              name="arrow-right-bold-circle"
              size={50}
              color="black"
              alignSelf="flex-end"
            />
          </TouchableOpacity>
        </HStack>
      );
    } else if (num == 6) {
      return (
        <HStack space={7}>
          <TouchableOpacity onPress={() => setNum(num - 1)}>
            <MaterialCommunityIcons
              name="arrow-left-bold-circle"
              size={50}
              color="black"
            />
          </TouchableOpacity>
        </HStack>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <VStack
        space={2}
        width="100%"
        height="100%"
        bg="warning.50"
        alignItems="center"
        justifyContent="center"
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
          padding="10px"
          justifyContent="space-between"
          flex={5}
        >
          <ScrollView
            _contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box alignItems="center" justifyContent="space-between">
              {getContent()}
            </Box>
          </ScrollView>
          {getArrows()}
        </Box>
        <Button
          onPress={() => setNum(1) || navigation.navigate("Home")}
          size="lg"
          width="4/5"
          flex={1}
          marginBottom="3"
          _text={{
            fontSize: "xl",
          }}
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
