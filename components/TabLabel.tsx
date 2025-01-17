import { moderateScale } from "@/lib/helpers";
import { useTheme } from "@rneui/themed";
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
  const { theme } = useTheme();

  return (
    <Text
      style={{
        color: focused ? color : theme.colors.textColor,
        fontSize: moderateScale(12),
        fontFamily: "ArimaSemiBold",
      }}
    >
      {children}
    </Text>
  );
}
