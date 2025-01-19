import HeadingText from "@/components/HeadingText";
import Separator from "@/components/Separator";
import BookIcon from "@/components/svgs/BookIcon";
import HeadphonesIcon from "@/components/svgs/HeadphonesIcon";
import HeartIcon from "@/components/svgs/HeartIcon";
import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";
import { Colors } from "@rneui/base";
import { useTheme } from "@rneui/themed";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { EdgeInsets } from "react-native-safe-area-context";

export default function ReadingPage() {
  const { theme } = useTheme();

  const [favorited, setFavorited] = useState(false);

  const styles = makeStyles(theme);

  const { image } = useLocalSearchParams<{ image: string }>();
  const imageSource = JSON.parse(image) as ImageSourcePropType;

  function handleAddToFav() {
    setFavorited((prev) => !prev);
  }

  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
          </View>

          <View style={styles.topTexts}>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Ratings</Text>

              <Pressable onPress={handleAddToFav}>
                <HeartIcon
                  fill={favorited ? theme.colors.mainTextColor : "transparent"}
                />
              </Pressable>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Saved</Text>

              <Text style={styles.textLeading}>2.7k</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Lang</Text>

              <Text style={styles.textLeading}>Eng</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomNavContainer}>
            <View style={styles.navbar}>
              <View style={styles.navbarTextContainer}>
                <BookIcon
                  width={horizontalScale(20)}
                  height={verticalScale(20)}
                />

                <Text style={styles.navbarText}>Read book</Text>
              </View>

              <Separator
                height={"50%"}
                isPercentageHeight={true}
                width={2.5}
                isPercentageWidth={false}
                styles={{ backgroundColor: theme.colors.textColor }}
              />

              <View style={styles.navbarTextContainer}>
                <HeadphonesIcon
                  width={horizontalScale(20)}
                  height={verticalScale(20)}
                />

                <Text style={styles.navbarText}>Listen to Audio</Text>
              </View>
            </View>
          </View>

          <View>
            <HeadingText>About the book</HeadingText>

            <Text style={styles.leadingText}>
              “These are the people you will need to know,” he went on.
              “Connections that you must cultivate.Lucy nodded dutifully, all
              the while making a mental list of all the places she would rather
              be. Paris, Venice, Greece, although weren’t they at war? No
              matter. She would still rather be in Greece.
            </Text>
          </View>

          <View>
            <HeadingText>Who is this for</HeadingText>

            <Text style={styles.leadingText}>
              “These are the people you will need to know,” he went on.
              “Connections that you must cultivate.Lucy nodded dutifully, all
              the while making a mental list of all the places she would rather
              be. Paris, Venice, Greece, although weren’t they at war? No
              matter. She would still rather be in Greece.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
}

function makeStyles({ colors }: { colors: Colors }) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    topContainer: {
      height: verticalScale(455),
      backgroundColor: colors.textColor,
      justifyContent: "space-evenly",
      paddingHorizontal: horizontalScale(20),
    },

    imageContainer: {
      height: verticalScale(310),
      width: horizontalScale(250),
      overflow: "hidden",
      borderRadius: moderateScale(15),
      alignSelf: "center",
    },

    image: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
    },

    topTexts: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    textContainer: {
      alignItems: "center",
    },

    textHeader: {
      fontFamily: "ArimaMedium",
      color: colors.white,
      fontSize: moderateScale(16),
      marginBottom: verticalScale(2.5),
    },

    textLeading: {
      fontSize: moderateScale(16),
      color: colors.white,
      fontFamily: "ArimaLight",
    },

    bottomContainer: {
      paddingHorizontal: horizontalScale(20),
      rowGap: verticalScale(35),
      minHeight: verticalScale(650),
    },

    bottomNavContainer: {
      alignItems: "center",
    },

    navbar: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      backgroundColor: colors.white,
      height: verticalScale(57),
      alignItems: "center",
      paddingHorizontal: horizontalScale(15),
      borderBottomEndRadius: moderateScale(10),
      borderBottomStartRadius: moderateScale(10),
    },

    navbarTextContainer: {
      flexDirection: "row",
      columnGap: horizontalScale(10),
      alignItems: "center",
    },

    navbarText: {
      fontFamily: "ArimaLight",
      color: colors.textColor,
      fontSize: moderateScale(16),
    },

    leadingText: {
      fontFamily: "ArimaRegular",
      color: colors.textColor,
      fontSize: moderateScale(16),
    },
  });
}
