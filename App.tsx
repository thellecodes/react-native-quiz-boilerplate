import * as React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LoadAssets, theme } from "./src/components";

import { OnBoardingNavigator } from "./src/components/OnBoarding";

const assets: number[] = [];

const fonts = {
  "Gotham-Bold": require("./assets/fonts/Gotham-Bold.otf"),
  "Gotham-Medium": require("./assets/fonts/GothamMedium.ttf"),
  "Gotham-Black": require("./assets/fonts/Gotham-Black.otf"),
};

type AppStackRoutes = {
  OnBoarding: undefined;
  Home: undefined;
};

const AppStack = createStackNavigator<AppStackRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ assets, fonts }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="OnBoarding"
              component={OnBoardingNavigator}
            />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
      <StatusBar />
    </ThemeProvider>
  );
}
