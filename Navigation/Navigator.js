import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHeader from "../Components/header/UserHeader";
import GetStarted from "../Components/GetStarted";
import TabNav from "./TabNav";
const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="getStarted"
        component={GetStarted}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="tabNav"
        component={TabNav}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
