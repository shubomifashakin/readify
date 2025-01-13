import { ReactNode } from "react";
import { Tabs } from "expo-router";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <Tabs.Screen
      options={{
        headerShown: true,
        header: () => children,
      }}
    />
  );
}
