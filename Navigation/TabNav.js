import { View, Text } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Octicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discover from "../app/Screens/Discover";
import Home from "../app/Screens/Home";
import Saved from "../app/Screens/Saved";
import Profile from "../app/Screens/Profile";
import UserHeader from "../Components/header/UserHeader";
import SearchHeader from "../Components/header/SearchHeader";
const Tab = createBottomTabNavigator();


const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "#fff",
        tabBarActiveTintColor: "orange",
        tabBarStyle: {
          height: 65,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            headerStyle: {},
          headerStatusBarHeight: 60,
          headerLeft: () => <UserHeader />,
          headerRight: () => <SearchHeader />,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Octicons
                size={22}
                name="home"
                color={focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}
              />
              <Text
                style={{
                  color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <SimpleLineIcons
                size={22}
                name="paper-clip"
                color={focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}
              />
              <Text
                style={{
                  color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)",
                  fontSize: 12,
                }}
              >
                Discover
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Feather
                size={22}
                name="save"
                color={focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}
              />
              <Text
                style={{
                  color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)",
                  fontSize: 12,
                }}
              >
                Saved
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <AntDesign
                size={22}
                name="user"
                color={focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}
              />
              <Text
                style={{
                  color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)",
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
