import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { theme } from "./src/infrastructure/theme";
import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function App() {
  const [oswaldLoaded] = useFonts({ Oswald_400Regular });
  const [ralewayLoaded] = useFonts({ Raleway_400Regular });
  const [robotoLoaded] = useFonts({ Roboto_400Regular });

  if (!oswaldLoaded || !ralewayLoaded || !robotoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
