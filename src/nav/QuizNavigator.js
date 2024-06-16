import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Data from "../screens/Data";
import Favorites from "../screens/Favorites";
import ItemScreen from "../screens/ItemScreen";
import Profile from "../screens/Profile";
import FavSearch from "../screens/FavSearch";
import Quiz from "../screens/Quiz";
import Test from "../screens/Test";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

const QuizNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Quiz"}>
      <Stack.Screen
        name="Quiz"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={Quiz}
      />
      {/* <Stack.Screen
        name="Test"
        options={{
          headerShown: false,
        }}
        component={Test}
      /> */}
      <Stack.Screen
        name="Result"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={Result}
      />
    </Stack.Navigator>
  );
};

export default QuizNavigator;
