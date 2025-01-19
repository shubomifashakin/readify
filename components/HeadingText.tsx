import { ReactNode } from "react";
import { Text } from "react-native";

import { useTheme } from "@rneui/themed";

import { moderateScale, verticalScale } from "@/lib/helpers";

export default function HeadingText({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <Text
      style={{
        fontFamily: "ArimaBold",
        fontSize: moderateScale(20),
        color: theme.colors.mainTextColor,
        paddingBottom: verticalScale(20),
      }}
    >
      {children}
    </Text>
  );
}
