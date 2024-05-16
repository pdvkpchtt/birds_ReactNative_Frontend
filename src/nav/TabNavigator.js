import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from "../screens/Quiz";
// import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Quiz"
      // tabBar={(props) => <CustomTabBar {...props} />}
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
        name="Data"
        component={Quiz}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Quiz}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
