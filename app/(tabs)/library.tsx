import React, { FlatList, StyleSheet, Text, View } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@rneui/themed";
import { Colors } from "@rneui/base";

import LibraryItem from "@/components/LibraryItem";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

import thestandin from "../../assets/images/thestandin.png";
import bridgerton from "../../assets/images/bridgerton.png";
import herbwitch from "../../assets/images/herbwitch.jpeg";
import clickToSubscribe from "../../assets/images/clickToSubscribe.jpeg";
import dream from "../../assets/images/dream.jpeg";
import monster from "../../assets/images/monster.jpeg";
import alone from "../../assets/images/alone.jpeg";
import race from "../../assets/images/race.jpeg";
import dark from "../../assets/images/dark.jpeg";

const books = [
  {
    name: "The stand in",
    image: thestandin,
    author: "Lily Chu",
    percentageRead: "25%",
  },

  {
    name: "Bridgerton",
    image: bridgerton,
    author: "Julia Quin",
    percentageRead: "25%",
  },

  {
    name: "The Herbwitch Princess",
    image: herbwitch,
    author: "Rose Lolla",
    percentageRead: "25%",
  },

  {
    name: "Click to subscribe",
    image: clickToSubscribe,
    author: "Adele Mandison",
    percentageRead: "25%",
  },

  {
    name: "The Dream Runners",
    image: dream,
    author: "Adele Mandison",
    percentageRead: "25%",
  },
  {
    name: "The Monster Prize",
    image: monster,
    author: "Linda Johnson",
    percentageRead: "25%",
  },
  {
    name: "Alone",
    image: alone,
    author: "Micheal B Jordan",
    percentageRead: "25%",
  },

  {
    name: "The Race Blackend Nevers",
    image: race,
    author: "Doughlas Bain",
    percentageRead: "25%",
  },
  {
    name: "One Dark Window",
    image: dark,
    author: "Rachel Colin",
    percentageRead: "25%",
  },
];

export default function Library() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const styles = makeStyles({ colors: theme.colors, insets });
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={books}
        ListHeaderComponent={<Text style={styles.listHeading}>Library</Text>}
        ListFooterComponent={
          <Text style={styles.footer}>{books.length} books 1 Series</Text>
        }
        renderItem={({ item, index }) => {
          return <LibraryItem item={item} key={index} />;
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              marginVertical: verticalScale(30),
              width: "100%",
              backgroundColor: theme.colors.textColor,
            }}
          ></View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function makeStyles({
  colors,
  insets,
}: {
  colors: Colors;
  insets: EdgeInsets;
}) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(15),
      flex: 1,
    },

    listHeading: {
      fontFamily: "ArimaBold",
      fontSize: moderateScale(20),
      color: colors.mainTextColor,
      paddingBottom: verticalScale(20),
    },

    footer: {
      fontFamily: "ArimaBold",
      textAlign: "center",
      marginTop: verticalScale(15),
      color: colors.textColor,
    },
  });
}
