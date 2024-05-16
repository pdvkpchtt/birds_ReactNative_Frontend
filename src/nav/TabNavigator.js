import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Quiz from "../screens/Quiz";
import CustomTabBar from "./CustomTabBar";
import DataNavigator from "./DataNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Quiz"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="DataStack"
        component={DataNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
