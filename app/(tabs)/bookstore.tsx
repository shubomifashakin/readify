import { Fragment } from "react";
import React, {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "@rneui/base";
import { useTheme } from "@rneui/themed";

import Separator from "@/components/Separator";
import HeadingText from "@/components/HeadingText";
import LibraryItem from "@/components/LibraryItem";
import FlatlistImage from "@/components/FlatlistItem";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

const freeBooks = [
  {
    name: "Bridgerton",
    image: require("@/assets/images/bridgerton.png"),
    author: "Julia Quin",
  },

  {
    name: "The Herbwitch Princess",
    image: require("@/assets/images/herbwitch.jpeg"),
    author: "Rose Lolla",
  },

  {
    name: "Click to subscribe",
    image: require("@/assets/images/clickToSubscribe.jpeg"),
    author: "Adele Mandison",
  },

  {
    name: "The Dream Runners",
    image: require("@/assets/images/dream.jpeg"),
    author: "Adele Mandison",
  },
];

const bookStore = [
  require("@/assets/images/oneLastJob.png"),
  require("@/assets/images/songToDrown.png"),
  require("@/assets/images/trendingImage8.png"),
  require("@/assets/images/itEndsWith.png"),
];

const genres = [
  { image: require("@/assets/images/curses.png"), genre: "Fiction" },
  { image: require("@/assets/images/herbwitch.jpeg"), genre: "War" },
  {
    image: require("@/assets/images/findingHerPanthers.png"),
    genre: "Fantasy",
  },
  { image: require("@/assets/images/thereWasAFeeling.png"), genre: "Poetry" },
  { image: require("@/assets/images/torn.png"), genre: "Prose" },
];

export default function Bookstore() {
  const { theme } = useTheme();

  const styles = makeStyles({ colors: theme.colors });

  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ rowGap: verticalScale(25) }}
        alwaysBounceVertical
      >
        <View style={styles.section}>
          <HeadingText>Book Store</HeadingText>

          <FlatList
            data={bookStore}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <FlatlistImage
                  key={`bookstore-${index}`}
                  source={item}
                  height={200}
                  width={250}
                  radius={15}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return (
                <Separator
                  height={0}
                  width={25}
                  isPercentageHeight={false}
                  isPercentageWidth={false}
                />
              );
            }}
          />
        </View>

        <View style={styles.section}>
          <HeadingText>Genres</HeadingText>

          <FlatList
            horizontal
            data={genres}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View key={`genre-${index}`}>
                  <Text
                    style={{
                      fontFamily: "ArimaRegular",
                      color: theme.colors.mainTextColor,
                      marginBottom: verticalScale(15),
                      fontSize: moderateScale(16),
                    }}
                  >
                    {item.genre}
                  </Text>

                  <FlatlistImage
                    source={item.image}
                    height={260}
                    width={150}
                    radius={15}
                  />
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return (
                <Separator
                  height={0}
                  width={15}
                  isPercentageHeight={false}
                  isPercentageWidth={false}
                />
              );
            }}
          />
        </View>

        <View>
          <HeadingText>Free books</HeadingText>

          <View>
            {freeBooks.map((book, index) => {
              return (
                <Fragment key={`freebook-${index}`}>
                  <LibraryItem item={book} />

                  {index + 1 !== freeBooks.length ? (
                    <Separator
                      height={1}
                      width={"100%"}
                      isPercentageHeight={false}
                      isPercentageWidth={true}
                      styles={{
                        marginVertical: verticalScale(15),
                        backgroundColor: theme.colors.textColor,
                      }}
                    />
                  ) : null}
                </Fragment>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function makeStyles({ colors }: { colors: Colors }) {
  return StyleSheet.create({
    scrollContainer: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(15),
    },

    section: { marginBottom: verticalScale(40) },
  });
}
