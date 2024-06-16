import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Data from "../screens/Data";
import Favorites from "../screens/Favorites";
import ItemScreen from "../screens/ItemScreen";
import Profile from "../screens/Profile";
import FavSearch from "../screens/FavSearch";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Profile"}>
      <Stack.Screen
        name="Profile"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={Profile}
      />
      <Stack.Screen
        name="Favorites"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={Favorites}
      />
      <Stack.Screen
        name="Item1"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={ItemScreen}
      />
      <Stack.Screen
        name="FavSearch"
        options={{
          headerShown: false,
          animation: "none",
        }}
        component={FavSearch}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
