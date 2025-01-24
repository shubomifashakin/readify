import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "@rneui/themed";

import { theme } from "@/constants/Colors";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    ArimaRegular: require("../assets/fonts/arima/Arima-Regular.ttf"),
    ArimaBold: require("../assets/fonts/arima/Arima-Bold.ttf"),
    ArimaLight: require("../assets/fonts/arima/Arima-Light.ttf"),
    ArimaMedium: require("../assets/fonts/arima/Arima-Medium.ttf"),
    ArimaSemiBold: require("../assets/fonts/arima/Arima-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 1500,
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animation: "none",
            animationDuration: 1500,
          }}
        />

        <Stack.Screen
          name="reading"
          options={{
            animation: "slide_from_right",
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
