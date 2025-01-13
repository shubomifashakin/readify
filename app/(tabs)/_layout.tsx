import React from "react";
import { Tabs } from "expo-router";

import BookstoreIcon from "@/components/svgs/Bookstore";
import HomeIcon from "@/components/svgs/HomeIcon";
import LibraryIcon from "@/components/svgs/LibraryIcon";
import SearchIcon from "@/components/svgs/searchIcon";
import TabLabel from "@/components/TabLabel";

import { moderateScale, verticalScale } from "@/lib/helpers";
import { useTheme } from "@rneui/themed";

export default function TabLayout() {
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarStyle: { height: verticalScale(80), alignItems: "center" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon fill={focused ? color : "#686D76"} />
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
            <LibraryIcon fill={focused ? color : "#686D76"} />
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
            <BookstoreIcon fill={focused ? color : "#686D76"} />
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
            <SearchIcon fill={focused ? color : "#686D76"} />
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
    </Tabs>
  );
}
