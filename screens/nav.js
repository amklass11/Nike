import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Favourite from "./Favourite";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductProvider } from "./context";



const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    
    <NavigationContainer>
      <ProductProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          headerStyle: {
            font: "Ralway",
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarStyle: {
            display: "flex",
            borderRadius: 100,
          },
          tabBarItemStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarActiveTintColor: "skyblue",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIconStyle: {
            width: 20,
            height: 20,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      </ProductProvider>
    </NavigationContainer>
  
  );
}

const Stack = createStackNavigator();

function HomeStackGroup() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}

export default function Nav() {
  return <TabGroup />;
}
