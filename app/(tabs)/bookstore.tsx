import React, {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "@rneui/base";
import { useTheme } from "@rneui/themed";

import Separator from "@/components/Separator";
import LibraryItem from "@/components/LibraryItem";
import FlatlistImage from "@/components/FlatlistItem";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

import dream from "../../assets/images/dream.jpeg";
import herbwitch from "../../assets/images/herbwitch.jpeg";
import bridgerton from "../../assets/images/bridgerton.png";
import clickToSubscribe from "../../assets/images/clickToSubscribe.jpeg";
import songToDrown from "../../assets/images/songToDrown.png";
import oneLastJob from "../../assets/images/oneLastJob.png";
import trendingImage8 from "../../assets/images/trendingImage8.png";
import itEndsWith from "../../assets/images/itEndsWith.png";
import curses from "../../assets/images/curses.png";
import otherWords from "../../assets/images/otherWords.png";
import findingHerPanthers from "../../assets/images/findingHerPanthers.png";
import thereWasAFeeling from "../../assets/images/thereWasAFeeling.png";
import torn from "../../assets/images/torn.png";

const freeBooks = [
  {
    name: "Bridgerton",
    image: bridgerton,
    author: "Julia Quin",
  },

  {
    name: "The Herbwitch Princess",
    image: herbwitch,
    author: "Rose Lolla",
  },

  {
    name: "Click to subscribe",
    image: clickToSubscribe,
    author: "Adele Mandison",
  },

  {
    name: "The Dream Runners",
    image: dream,
    author: "Adele Mandison",
  },
];

const bookStore = [oneLastJob, songToDrown, trendingImage8, itEndsWith];

const genres = [
  { image: curses, genre: "Fiction" },
  { image: otherWords, genre: "War" },
  { image: findingHerPanthers, genre: "Fantasy" },
  { image: thereWasAFeeling, genre: "Poetry" },
  { image: torn, genre: "Prose" },
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
          <Text style={styles.listHeading}>Book Store</Text>

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
          <Text style={styles.listHeading}>Genres</Text>

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
          <Text style={styles.listHeading}>Free books</Text>

          <View>
            {freeBooks.map((book, index) => {
              return (
                <>
                  <LibraryItem item={book} key={`freebook-${index}`} />

                  {index + 1 !== freeBooks.length ? (
                    <Separator
                      key={`separator-${index}`}
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
                </>
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

    listHeading: {
      fontFamily: "ArimaBold",
      fontSize: moderateScale(20),
      color: colors.mainTextColor,
      paddingBottom: verticalScale(20),
    },

    section: { marginBottom: verticalScale(40) },
  });
}
