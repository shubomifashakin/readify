import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import DotsIcon from "./svgs/Dots";
import { Colors, useTheme } from "@rneui/themed";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function LibraryItem({
  item,
}: {
  item: {
    name: string;
    image: any;
    author: string;
    percentageRead?: string;
  };
}) {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const amountPressed = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(amountPressed.value ? 1 : 0, { duration: 500 }),
      top: withTiming(amountPressed.value < 2 ? "77%" : 0, { duration: 500 }),
    };
  });

  function handlePress() {
    if (amountPressed.value === 2) {
      amountPressed.value = 0;
      return;
    }

    amountPressed.value = amountPressed.value + 1;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable onPress={handlePress}>
          <Image source={item.image} style={styles.image} />
        </Pressable>

        <Animated.View
          style={[styles.bookSummaryOverlayContainer, animatedStyles]}
        >
          <Text style={styles.bookSummaryHeader}>About Book</Text>

          <Text style={styles.bookSummaryText}>
            The stand in written by Lily Chu is a fictional novel that dwells on
            the life of a young beautiful lady that found love unexpectedly
          </Text>
        </Animated.View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.texts}>
          <Text style={styles.header}>{item.name}</Text>

          <Text style={styles.leading}>{item.author}</Text>

          {item.percentageRead ? (
            <Text style={styles.leading}>{item.percentageRead}</Text>
          ) : null}
        </View>

        <View>
          <DotsIcon />
        </View>
      </View>
    </View>
  );
}

function makeStyles({ colors }: { colors: Colors }) {
  return StyleSheet.create({
    container: {
      height: verticalScale(100),
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    imageContainer: {
      height: verticalScale(100),
      width: horizontalScale(85),
      overflow: "hidden",
      borderRadius: moderateScale(5),
      position: "relative",
    },

    image: { height: "100%", width: "100%", objectFit: "cover" },

    bookSummaryOverlayContainer: {
      width: "100%",
      height: "100%",
      left: 0,
      backgroundColor: "#ffffffd1",
      position: "absolute",
      paddingHorizontal: horizontalScale(4),
      paddingVertical: verticalScale(3),
      borderTopStartRadius: moderateScale(5),
      borderTopEndRadius: moderateScale(5),
      pointerEvents: "none",
      rowGap: verticalScale(1.5),
    },

    bookSummaryHeader: {
      fontSize: moderateScale(10),
      fontFamily: "ArimaBold",
    },

    bookSummaryText: {
      fontSize: moderateScale(8),
      fontFamily: "ArimaLight",
      lineHeight: verticalScale(10),
    },

    infoContainer: {
      flexGrow: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: horizontalScale(20),
      alignItems: "center",
    },

    texts: { alignSelf: "flex-start" },

    header: {
      fontFamily: "ArimaBold",
      fontSize: moderateScale(16),
      color: colors.mainTextColor,
    },

    leading: {
      fontFamily: "ArimaMedium",
      color: colors.textColor,
    },
  });
}
