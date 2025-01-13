import { useEffect } from "react";
import { ThemeProvider } from "@rneui/themed";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { theme } from "@/constants/Colors";

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
      console.log("loaded");
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
            animationDuration: 1000,
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>

      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
