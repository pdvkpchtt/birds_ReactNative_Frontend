import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Layout from "./src/layout/Layout";
import Auth from "./src/screens/Auth";
import AuthRegister from "./src/screens/AuthRegister";
import AuthAuth from "./src/screens/AuthAuth";
import { Provider } from "react-redux";
import { store } from "./src/store";
import MainNavigator from "./src/nav/MainNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/Poppins-Thin.ttf"),

    "Inter-Black": require("./assets/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/Inter-Thin.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <MainNavigator />

      <StatusBar style="light" />
    </Provider>
  );
}
