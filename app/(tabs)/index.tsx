import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, useTheme } from "@rneui/themed";

import Header from "@/components/header";
import Separator from "@/components/Separator";
import BellIcon from "@/components/svgs/BellIcon";
import SearchIcon from "@/components/svgs/searchIcon";
import FlatlistImage from "@/components/FlatlistItem";
import ContinueReadingItem from "@/components/ContinueReadingItem";

import { customEntering } from "@/animations/EnterAnimation";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

const images = [
  require("@/assets/images/trendingImage1.png"),
  require("@/assets/images/trendingImage2.png"),
  require("@/assets/images/trendingImage3.png"),
  require("@/assets/images/trendingImage4.png"),
  require("@/assets/images/trendingImage5.png"),
  require("@/assets/images/trendingImage6.png"),
  require("@/assets/images/trendingImage7.png"),
  require("@/assets/images/trendingImage8.png"),
];

const images2 = [
  require("@/assets/images/thestandin.png"),
  require("@/assets/images/trendingImage1.png"),
  require("@/assets/images/trendingImage2.png"),
  require("@/assets/images/trendingImage3.png"),
];

const continueReading = [
  {
    page: 46,
    totalPages: 675,
    image: require("@/assets/images/continueImage1.png"),
    book: "Queen Charlotte",
  },
  {
    page: 100,
    totalPages: 150,
    image: require("@/assets/images/continueImage2.png"),
    book: "Daydream",
  },
];

export default function Home() {
  const { theme } = useTheme();

  const insets = useSafeAreaInsets();

  const styles = makeStyles({ colors: theme.colors, insets });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContainer}>
        <Header>
          <View style={styles.header}>
            <Text
              style={{
                fontFamily: "ArimaBold",
                color: theme.colors.mainTextColor,
                fontSize: moderateScale(16),
              }}
            >
              Hey Julia
            </Text>

            <BellIcon />
          </View>
        </Header>

        <Text style={styles.leading}>Are you ready for your daily goal?</Text>

        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search available books..."
            placeholderTextColor={theme.colors.textColor}
            style={styles.textInputStyle}
          />

          <SearchIcon
            fill={theme.colors.textColor}
            width={horizontalScale(20)}
            height={verticalScale(20)}
          />
        </View>

        <Animated.View
          entering={customEntering}
          style={styles.sectionContainer}
        >
          <View style={styles.sectionHeaderTexts}>
            <Text style={styles.sectionHeading}>Trending</Text>

            <Text style={styles.sectionLeading}>See all</Text>
          </View>

          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item, index }) => {
              return (
                <FlatlistImage
                  key={index}
                  width={85}
                  height={127}
                  source={item}
                />
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
        </Animated.View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderTexts}>
            <Text style={styles.sectionHeading}>Continue Reading</Text>
          </View>

          <FlatList
            data={continueReading}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <ContinueReadingItem
                  image={item.image}
                  page={item.page}
                  totalPages={item.totalPages}
                  key={index}
                  book={item.book}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
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

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderTexts}>
            <Text style={styles.sectionHeading}>Fictional</Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images2}
            renderItem={({ item, index }) => {
              return (
                <FlatlistImage
                  key={index}
                  source={item}
                  height={160}
                  width={120}
                  radius={5}
                />
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

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderTexts}>
            <Text style={styles.sectionHeading}>Reading goal</Text>
          </View>

          <View style={{ position: "relative", height: 100, width: "100%" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                rowGap: verticalScale(30),
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
              }}
            >
              <Text style={styles.readingGoalHeader}>Today&apos;s reading</Text>

              <Text style={styles.readingGoalLeading}>
                50 minutes to daily reading goals
              </Text>

              <View style={styles.keepReadingBtnContainer}>
                <Pressable style={styles.keepReadingBtn}>
                  <Text style={styles.keepReadingBtnHeader}>Keep reading</Text>

                  <Text style={styles.keepReadingBtnLeading}>Asap</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderTexts}>
            <Text style={styles.sectionHeading}>Books read this year</Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images2}
            renderItem={({ item, index }) => {
              return (
                <FlatlistImage
                  key={index}
                  source={item}
                  height={150}
                  width={90}
                  radius={5}
                />
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
      </View>
    </ScrollView>
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
    header: {
      justifyContent: "space-between",
      paddingHorizontal: horizontalScale(20),
      height: verticalScale(100),
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.white,
      paddingTop: insets.top,
    },

    scrollContainer: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(15),
      backgroundColor: colors.background,
    },

    leading: {
      fontSize: moderateScale(12),
      fontFamily: "ArimaRegular",
      color: colors.textColor,
      lineHeight: verticalScale(20),
    },

    searchBarContainer: {
      borderRadius: moderateScale(30),
      width: horizontalScale(324),
      height: verticalScale(45),
      alignSelf: "center",
      overflow: "hidden",
      backgroundColor: colors.white,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: horizontalScale(20),
      marginTop: verticalScale(25),
      alignItems: "center",
      columnGap: horizontalScale(10),
    },

    textInputStyle: {
      fontFamily: "ArimaRegular",
      fontSize: moderateScale(16),
      flex: 1,
      height: "100%",
    },

    sectionContainer: {
      marginTop: verticalScale(35),
      transformOrigin: "left",
      rowGap: verticalScale(15),
      backgroundColor: colors.background,
    },

    sectionHeaderTexts: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    sectionHeading: {
      fontFamily: "ArimaBold",
      fontSize: moderateScale(20),
      color: colors.mainTextColor,
    },

    sectionLeading: {
      fontFamily: "ArimaRegular",
      fontSize: moderateScale(12, -1.5),
      color: colors.textColor,
    },

    readingGoalHeader: {
      fontFamily: "ArimaBold",
      color: colors.textColor,
      fontSize: moderateScale(16),
    },

    readingGoalLeading: {
      fontFamily: "ArimaRegular",
      color: colors.mainTextColor,
      fontSize: moderateScale(12),
    },

    keepReadingBtnContainer: {
      borderRadius: moderateScale(30),
      backgroundColor: colors.white,
      width: horizontalScale(169),
      height: verticalScale(55),
      shadowColor: "#66666699",
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },

    keepReadingBtn: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },

    keepReadingBtnHeader: {
      fontSize: moderateScale(16),
      fontFamily: "ArimaMedium",
      color: colors.mainTextColor,
    },

    keepReadingBtnLeading: {
      fontSize: moderateScale(12),
      fontFamily: "ArimaRegular",
      color: colors.textColor,
    },
  });
}
