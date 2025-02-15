import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Animated, {
  FadeOutUp,
  FadeInDown,
  ZoomInLeft,
  FadeOut,
} from "react-native-reanimated";

import { Colors, useTheme } from "@rneui/themed";

import Button from "@/components/Button";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export default function Onboarding() {
  const { theme } = useTheme();

  const styles = makeStyles({ colors: theme.colors });

  return (
    <AnimatedSafeAreaView
      exiting={FadeOut.duration(1000)}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Animated.View
          entering={ZoomInLeft.duration(1000).springify().damping(200)}
          style={styles.animatedCircle}
        >
          <Image source={require("../assets/images/Ellipse 1.png")} />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(1000).delay(500)}
          style={styles.mainImageContainer}
        >
          <Image
            style={{
              height: "100%",
              objectFit: "contain",
            }}
            source={require("../assets/images/onboardingImage.png")}
          />
        </Animated.View>

        <View style={styles.shadowImage}>
          <Image source={require("../assets/images/shadow.png")} />
        </View>
      </View>

      <View style={styles.lower}>
        <View style={styles.textContainer}>
          <Text style={styles.leading}>Book app</Text>

          <Text style={styles.heading}>Reading is more entertaining</Text>
        </View>

        <Animated.View
          exiting={FadeOutUp.duration(1000)}
          entering={FadeInDown.duration(1000).delay(500)}
          style={styles.lowerTextContainer}
        >
          <Text
            numberOfLines={3}
            textBreakStrategy="balanced"
            style={styles.brandingText}
          >
            "Unleash your imagination! Readify brings you an endless world of
            books, curated just for you. Browse, read, and enjoy!"
          </Text>

          <Button href={"/(tabs)"}>Explore</Button>
        </Animated.View>
      </View>
    </AnimatedSafeAreaView>
  );
}

function makeStyles({ colors }: { colors: Colors }) {
  return StyleSheet.create({
    container: { backgroundColor: colors.background, flex: 1, height: "100%" },

    upper: {
      height: "50%",
      backgroundColor: colors.white,
      position: "relative",
      overflow: "hidden",
    },

    animatedCircle: {
      transformOrigin: "left",
      position: "absolute",
      top: verticalScale(50),
      left: 0,
      zIndex: 5,
      height: verticalScale(500),
      aspectRatio: 1,
    },

    mainImageContainer: {
      height: "100%",
      width: "100%",
      left: -horizontalScale(0),
      top: 10,
      zIndex: 10,
    },

    shadowImage: {
      position: "absolute",
      top: "70%",
      zIndex: 20,
    },

    lower: {
      height: "50%",
      backgroundColor: colors.background,
      paddingVertical: verticalScale(30),
      paddingHorizontal: horizontalScale(15),
      rowGap: verticalScale(20),
    },

    textContainer: {
      rowGap: verticalScale(20),
    },

    leading: {
      fontFamily: "ArimaSemiBold",
      color: colors.textColor,
      fontSize: moderateScale(16),
    },

    heading: {
      fontFamily: "ArimaBold",
      color: colors.mainTextColor,
      fontSize: moderateScale(36),
      lineHeight: 45,
    },

    lowerTextContainer: {
      justifyContent: "center",
      alignItems: "center",
      rowGap: verticalScale(20),
      width: "90%",
      alignSelf: "center",
    },

    brandingText: {
      textAlign: "center",
      fontFamily: "ArimaRegular",
      color: colors.mainTextColor,
      fontSize: moderateScale(16),
    },
  });
}
