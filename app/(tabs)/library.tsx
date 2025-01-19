import React, { FlatList, StyleSheet, Text, View } from "react-native";

import { useTheme } from "@rneui/themed";
import { Colors } from "@rneui/base";

import LibraryItem from "@/components/LibraryItem";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";
import Separator from "@/components/Separator";
import HeadingText from "@/components/HeadingText";

const books = [
  {
    name: "The stand in",
    image: require("@/assets/images/thestandin.png"),
    author: "Lily Chu",
    percentageRead: "25%",
  },

  {
    name: "Bridgerton",
    image: require("@/assets/images/bridgerton.png"),
    author: "Julia Quin",
    percentageRead: "25%",
  },

  {
    name: "The Herbwitch Princess",
    image: require("@/assets/images/herbwitch.jpeg"),
    author: "Rose Lolla",
    percentageRead: "25%",
  },

  {
    name: "Click to subscribe",
    image: require("@/assets/images/clickToSubscribe.jpeg"),
    author: "Adele Mandison",
    percentageRead: "25%",
  },

  {
    name: "The Dream Runners",
    image: require("@/assets/images/dream.jpeg"),
    author: "Adele Mandison",
    percentageRead: "25%",
  },
  {
    name: "The Monster Prize",
    image: require("@/assets/images/monster.jpeg"),
    author: "Linda Johnson",
    percentageRead: "25%",
  },
  {
    name: "Alone",
    image: require("@/assets/images/alone.jpeg"),
    author: "Micheal B Jordan",
    percentageRead: "25%",
  },

  {
    name: "The Race Blackend Nevers",
    image: require("@/assets/images/race.jpeg"),
    author: "Doughlas Bain",
    percentageRead: "25%",
  },
  {
    name: "One Dark Window",
    image: require("@/assets/images/dark.jpeg"),
    author: "Rachel Colin",
    percentageRead: "25%",
  },
];

export default function Library() {
  const { theme } = useTheme();

  const styles = makeStyles({ colors: theme.colors });

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={books}
        ListHeaderComponent={<HeadingText>Library</HeadingText>}
        ListFooterComponent={
          <Text style={styles.footer}>{books.length} books 1 Series</Text>
        }
        renderItem={({ item, index }) => {
          return <LibraryItem item={item} key={index} />;
        }}
        ItemSeparatorComponent={() => (
          <Separator
            height={1}
            width={"100%"}
            isPercentageWidth={true}
            isPercentageHeight={false}
            styles={{
              marginVertical: verticalScale(30),
              backgroundColor: theme.colors.textColor,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function makeStyles({ colors }: { colors: Colors }) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(15),
      flex: 1,
    },

    footer: {
      fontFamily: "ArimaBold",
      textAlign: "center",
      marginTop: verticalScale(15),
      color: colors.textColor,
    },
  });
}
