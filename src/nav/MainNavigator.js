import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";
import AuthAuth from "../screens/AuthAuth";
import AuthRegister from "../screens/AuthRegister";
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
          }}
          component={Auth}
        />
        <Stack.Screen
          name="AuthRegister"
          options={{
            headerShown: false,
          }}
          component={AuthRegister}
        />
        <Stack.Screen
          name="AuthAuth"
          options={{
            headerShown: false,
          }}
          component={AuthAuth}
        />
        <Stack.Screen
          name="Tabs"
          options={{
            headerShown: false,
          }}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
