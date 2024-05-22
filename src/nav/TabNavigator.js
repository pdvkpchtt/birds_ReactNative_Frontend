import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Quiz from "../screens/Quiz";
import CustomTabBar from "./CustomTabBar";
import DataNavigator from "./DataNavigator";
import ProfileNavigator from "./ProfileNavigator";
import QuizNavigator from "./QuizNavigator";

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
        name="QuizStack"
        component={QuizNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="DataStack"
        component={DataNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
