import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import Button from "@/components/Button";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Read() {
  const { bookImage } = useLocalSearchParams<{ bookImage: string }>();

  const parsedBookImage = JSON.parse(bookImage) as ImageSourcePropType;

  const styles = makeStyles();

  return (
    <Animated.View entering={FadeIn.duration(1000)} style={styles.container}>
      <View style={styles.innerWrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.bookImage} source={parsedBookImage} />
        </View>

        <Button href={"/(tabs)"}>Read</Button>
      </View>
    </Animated.View>
  );
}

function makeStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    innerWrapper: {
      rowGap: verticalScale(40),
      alignItems: "center",
    },

    imageContainer: {
      height: verticalScale(520),
      width: horizontalScale(350),
      overflow: "hidden",
      borderRadius: moderateScale(20),
    },

    bookImage: {
      height: "100%",
      width: "100%",
    },
  });
}
