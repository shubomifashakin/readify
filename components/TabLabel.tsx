import { moderateScale } from "@/lib/helpers";
import { ReactNode } from "react";
import { Text } from "react-native";

export default function TabLabel({
  focused,
  color,
  children,
}: {
  focused: boolean;
  color: string;
  children: ReactNode;
}) {
  return (
    <Text
      style={{
        color: focused ? color : "#686D76",
        fontSize: moderateScale(12),
        fontFamily: "ArimaSemiBold",
      }}
    >
      {children}
    </Text>
  );
}
