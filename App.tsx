import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";

// Theme
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const Stack = createStackNavigator();

// Components
// import QRScanner from "./src/components/QR";

// Views

// import Home from "./src/screens/Home";
import { Home, Login, Recipe } from "./src/screens";

export default function App() {

  const scheme = useColorScheme();
  console.log(scheme)
  return (
    <AppearanceProvider>
      <NavigationContainer theme={ scheme === "dark"? DarkTheme: DefaultTheme }>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Login"}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
