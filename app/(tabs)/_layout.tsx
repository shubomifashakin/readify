import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { router, Tabs } from "expo-router";

import { Colors } from "@rneui/base";
import { useTheme } from "@rneui/themed";

import Header from "@/components/header";
import TabLabel from "@/components/TabLabel";
import HomeIcon from "@/components/svgs/HomeIcon";
import BackIcon from "@/components/svgs/BackIcon";
import SearchIcon from "@/components/svgs/searchIcon";
import BookstoreIcon from "@/components/svgs/Bookstore";
import LibraryIcon from "@/components/svgs/LibraryIcon";

import { horizontalScale, verticalScale } from "@/lib/helpers";

export default function TabLayout() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const styles = makeStyles({ colors: theme.colors, insets });
  return (
    <Tabs
      screenOptions={{
        animation: "fade",
        headerShown: true,
        tabBarActiveTintColor: "#000",
        tabBarStyle: { height: verticalScale(80), alignItems: "center" },
        tabBarButton: ({ href, children, onPress }) => (
          <Pressable
            onPress={onPress}
            style={{
              alignItems: "center",
              paddingVertical: verticalScale(10),
            }}
          >
            {children}
          </Pressable>
        ),
        header(props) {
          return (
            <Header>
              <View style={styles.header}>
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
              </View>
            </Header>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon fill={focused ? color : theme.colors.textColor} />
          ),
          tabBarLabel({ focused, color }) {
            return (
              <TabLabel focused color={color}>
                Home
              </TabLabel>
            );
          },
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, focused }) => (
            <LibraryIcon fill={focused ? color : theme.colors.textColor} />
          ),
          tabBarLabel({ focused, color }) {
            return (
              <TabLabel focused color={color}>
                Library
              </TabLabel>
            );
          },
        }}
      />

      <Tabs.Screen
        name="bookstore"
        options={{
          title: "BookStore",
          tabBarIcon: ({ color, focused }) => (
            <BookstoreIcon fill={focused ? color : theme.colors.textColor} />
          ),
          tabBarLabel({ focused, color }) {
            return (
              <TabLabel focused color={color}>
                Bookstore
              </TabLabel>
            );
          },
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <SearchIcon fill={focused ? color : theme.colors.textColor} />
          ),
          tabBarLabel({ focused, color }) {
            return (
              <TabLabel focused color={color}>
                Search
              </TabLabel>
            );
          },
        }}
      />

      <Tabs.Screen
        name="currentRead"
        options={{
          title: "Read",
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}

function makeStyles({
  colors,
  insets,
}: {
  colors: Colors;
  insets: EdgeInsets;
}) {
  return StyleSheet.create({
    header: {
      justifyContent: "space-between",
      paddingHorizontal: horizontalScale(20),
      height: verticalScale(120 - insets.top),
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.white,
      paddingTop: insets.top,
    },
  });
}
