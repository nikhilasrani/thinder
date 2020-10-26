import React, { Component } from "react";
import AppNavigation from "./navigation/AppNavigation";
import AppLoading from "./components/AppLoading";
import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_700Bold,
  Manrope_600SemiBold,
  Manrope_500Medium,
  Manrope_400Regular,
  Manrope_300Light,
} from "@expo-google-fonts/manrope";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_800ExtraBold,
    Manrope_700Bold,
    Manrope_600SemiBold,
    Manrope_500Medium,
    Manrope_400Regular,
    Manrope_300Light,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigation />;
  }
}
