import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";
import { Image, StyleSheet, Text, View } from "react-native";
import DotsIcon from "./svgs/Dots";
import { Colors, useTheme } from "@rneui/themed";

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

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
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
    },

    image: { height: "100%", width: "100%", objectFit: "cover" },

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
