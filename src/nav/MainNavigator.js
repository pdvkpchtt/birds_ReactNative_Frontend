import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";
import AuthAuth from "../screens/AuthAuth";
import AuthRegister from "../screens/AuthRegister";
import Favorites from "../screens/Favorites";
import Test from "../screens/Test";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Auth"}>
        <Stack.Screen
          name="Auth"
          options={{
            headerShown: false,
            animation: "none",
          }}
          component={Auth}
        />
        <Stack.Screen
          name="AuthRegister"
          options={{
            headerShown: false,
            animation: "none",
          }}
          component={AuthRegister}
        />
        <Stack.Screen
          name="AuthAuth"
          options={{
            headerShown: false,
            animation: "none",
          }}
          component={AuthAuth}
        />
        <Stack.Screen
          name="Tabs"
          options={{
            headerShown: false,
            animation: "none",
          }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="Test"
          options={{
            headerShown: false,
            animation: "none",
          }}
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
