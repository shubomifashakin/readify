import { useEffect } from "react";
import { View, Pressable } from "react-native";

import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemeProvider } from "@rneui/themed";

import { theme } from "@/constants/Colors";

import "react-native-reanimated";
import Header from "@/components/header";
import BackIcon from "@/components/svgs/BackIcon";
import BookmarkIcon from "@/components/svgs/BookmarkIcon";

import { horizontalScale, verticalScale } from "@/lib/helpers";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({ fade: true, duration: 1000 });

export default function RootLayout() {
  const insets = useSafeAreaInsets();

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
            animationDuration: 1500,
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 1500,
          }}
        />

        <Stack.Screen
          name="reading"
          options={{
            animation: "none",
            header: () => {
              return (
                <Header>
                  <View
                    style={{
                      justifyContent: "space-between",
                      paddingHorizontal: horizontalScale(20),
                      height: verticalScale(100),
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor:
                        theme.mode === "dark"
                          ? theme.darkColors?.white
                          : theme.lightColors?.white,
                      paddingTop: insets.top,
                    }}
                  >
                    <Pressable
                      onPress={() => router.back()}
                      style={{
                        width: horizontalScale(30),
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <BackIcon />
                    </Pressable>

                    <BookmarkIcon />
                  </View>
                </Header>
              );
            },
          }}
        />
      </Stack>

      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
