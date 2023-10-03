import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import Market from "./screens/Market";
import Share from "./screens/Share";
import Networks from "./screens/Networks";
import Places from "./screens/Places";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Appbar } from "react-native-paper";
import * as Font from "expo-font";
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";
import history from './assets/history.png';
import { useEffect, useState } from "react";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setfont] = useState(null);
  let customFonts = {
    NunitoRegular: require("./assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont(true);
  }
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    return null; //equivalent to returning the splashscreen
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Indigi Book" />
          <Appbar.Action icon={history} onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>

        <Tab.Navigator
        initialRouteName="Home"
        activeColor="green"
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Market"
            component={Market}
            options={{
              tabBarLabel: "market",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="shopping"
                  size={26}
                  color="black"
                />
              ),
            }}
          />

          <Tab.Screen
            name="Post"
            component={Share}
            options={{
              tabBarLabel: "Post",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="plus-square" size={26} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Connections"
            component={Networks}
            options={{
              tabBarLabel: "Connections",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="people" size={26} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Places"
            component={Places}
            options={{
              tabBarLabel: "Places",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="map" size={26} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headercontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
