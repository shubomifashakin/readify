import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useTheme } from "@rneui/themed";
import { Colors } from "@rneui/base";

import StarIcon from "./svgs/StarIcon";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

export default function ContinueReadingItem({
  image,
  page,
  totalPages,
  book,
}: {
  image: ImageSourcePropType;
  page: number;
  totalPages: number;
  book: string;
}) {
  const { theme } = useTheme();

  const percentageRead = page / totalPages;

  const styles = makeStyles(theme, percentageRead);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={image} style={styles.image} />
      </View>

      <View>
        <Text style={styles.heading}>{book}</Text>

        <Text style={styles.leading}>
          Page {page} of {totalPages}
        </Text>

        <View style={styles.percentageContainer}>
          <View style={styles.percentageInner}>
            <View style={styles.percentage}></View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          {Array.from({ length: 5 }).map((_, index) => {
            return <StarIcon key={index} />;
          })}
        </View>

        <Text style={styles.bottomText}>Continue Reading</Text>
      </View>
    </View>
  );
}

function makeStyles({ colors }: { colors: Colors }, percentageRead: number) {
  return StyleSheet.create({
    container: {
      paddingVertical: verticalScale(10),
      paddingHorizontal: horizontalScale(10),
      flexDirection: "row",
      alignItems: "center",
      columnGap: horizontalScale(20),
      width: horizontalScale(287),
      height: verticalScale(150),
      borderRadius: moderateScale(10),
      backgroundColor: colors.white,
    },

    left: {
      height: verticalScale(120),
      width: horizontalScale(80),
      borderRadius: moderateScale(5),
      overflow: "hidden",
    },

    image: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },

    heading: {
      fontFamily: "ArimaMedium",
      fontSize: moderateScale(14),
      lineHeight: verticalScale(24.5),
    },

    leading: {
      fontFamily: "ArimaRegular",
      fontSize: moderateScale(12),
      color: colors.textColor,
    },

    percentageContainer: {
      width: horizontalScale(158),
      height: verticalScale(21),
      borderRadius: moderateScale(20),
      paddingHorizontal: horizontalScale(5),
      overflow: "hidden",
      marginTop: verticalScale(15),
      alignItems: "center",
      justifyContent: "center",

      //new
      shadowColor: "#0e0e0e99",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },

    percentageInner: {
      position: "relative",
      width: "100%",
      height: verticalScale(7),
      borderRadius: moderateScale(20),
      backgroundColor: "#D6DAE1",
    },

    percentage: {
      position: "absolute",
      backgroundColor: colors.mainTextColor,
      width: `${percentageRead * 100}%`,
      height: "100%",
      borderRadius: moderateScale(20),
    },

    bottomText: {
      fontFamily: "ArimaRegular",
      color: colors.textColor,
      fontSize: moderateScale(12),
      textAlign: "right",
      marginTop: verticalScale(5),
    },
  });
}
