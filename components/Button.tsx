import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Href, Link } from "expo-router";

import { ThemeOptions, useTheme } from "@rneui/themed";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

export default function Button({
  children,
  styles,
  href,
}: {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  href: Href;
}) {
  const { theme } = useTheme();

  const buttonStyles = makeStyles(theme);

  return (
    <View style={[buttonStyles.buttonContainer, styles]}>
      <Link style={buttonStyles.button} href={href}>
        <View style={buttonStyles.buttonTextContainer}>
          <Text style={buttonStyles.buttonText}>{children}</Text>
        </View>
      </Link>
    </View>
  );
}

function makeStyles({ colors }: ThemeOptions) {
  return StyleSheet.create({
    buttonContainer: {
      overflow: "hidden",
      borderRadius: moderateScale(40),
      width: horizontalScale(185),
      height: verticalScale(45),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.mainTextColor,
    },

    button: {
      backgroundColor: colors.mainTextColor,
      width: "100%",
      height: "100%",
    },

    buttonTextContainer: {
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },

    buttonText: {
      fontFamily: "ArimaBold",
      fontSize: moderateScale(16, -0.8),
      textAlign: "center",
      color: colors.background,
    },
  });
}
