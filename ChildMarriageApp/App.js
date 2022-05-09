import { StyleSheet } from "react-native";
import WelcomeScreen from "./src/screens/welcome/WelcomeScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import LearnScreen from "./src/screens/learn/LearnScreen";
import PlayScreen from "./src/screens/quiz/PlayScreen";
import ContactScreen from "./src/screens/contact/ContactScreen";
import StoriesScreen from "./src/screens/stories/StoriesScreen";
import SettingsScreen from "./src/screens/home/SettingsScreen";
import { theme } from "./src/style/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import ReportScreen from "./src/screens/report/ReportScreen";
import QuestionsScreen from "./src/screens/questions/QuestionsScreen";
import React, { useState } from "react";
import AppContext from "./src/components/AppContext";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const getStringData = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log("Reading error");
    }
  };
  const storeStringData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("Error in saving", e);
    }
  };

  const loc = Localization.locale.split("-")[0];
  const data = getStringData("language");
  const dataEmNum = getStringData("emNum");
  console.log(dataEmNum);
  const [language, setLanguage] = useState(Localization.locale.split("-")[0]);
  const [emergencyNumber, setemergencyNumber] = useState("000000000");
  // dataEmNum == null ? useState("000000000") : useState(dataEmNum);
  const updateLanguage = (newlang) => {
    setLanguage(newlang);
    storeStringData("language", newlang);
    alert(getStringData("language"));
  };
  const updateEmergencynumber = (newNumb) => {
    setemergencyNumber(newNumb);
    storeStringData("emNum", newNumb);
  };
  const userSettings = {
    language: language,
    emergencyNumber: emergencyNumber,
    updateLanguage,
    updateEmergencynumber,
  };
  return (
    <AppContext.Provider value={userSettings}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Learn" component={LearnScreen} />
            <Stack.Screen name="Play" component={PlayScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Stories" component={StoriesScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Report" component={ReportScreen} />
            <Stack.Screen name="Questions" component={QuestionsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
