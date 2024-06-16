import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Data from "../screens/Data";
import ItemScreen from "../screens/ItemScreen";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

const DataNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Data"}>
      <Stack.Screen
        name="Data"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={Data}
      />
      <Stack.Screen
        name="Search"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={Search}
      />
      <Stack.Screen
        name="Item"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={ItemScreen}
      />
    </Stack.Navigator>
  );
};

export default DataNavigator;
