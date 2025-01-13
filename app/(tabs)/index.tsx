import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  Easing,
  FadeInDown,
  SlideInDown,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
} from "react-native-reanimated";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, useTheme } from "@rneui/themed";

import Header from "@/components/header";
import SearchIcon from "@/components/svgs/searchIcon";

import trendingImage1 from "../../assets/images/trendingImage1.png";
import trendingImage2 from "../../assets/images/trendingImage2.png";
import trendingImage3 from "../../assets/images/trendingImage3.png";
import trendingImage4 from "../../assets/images/trendingImage4.png";
import trendingImage5 from "../../assets/images/trendingImage5.png";
import trendingImage6 from "../../assets/images/trendingImage6.png";
import trendingImage7 from "../../assets/images/trendingImage7.png";
import trendingImage8 from "../../assets/images/trendingImage8.png";

const images: ImageSourcePropType[] = [
  trendingImage1,
  trendingImage2,
  trendingImage3,
  trendingImage4,
  trendingImage5,
  trendingImage6,
  trendingImage7,
  trendingImage8,
];

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";

export default function Home() {
  const { theme } = useTheme();

  const insets = useSafeAreaInsets();

  const styles = makeStyles({ colors: theme.colors, insets });

  return (
    <ScrollView style={styles.scrollContainer}>
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

          <Text>Hello</Text>
        </View>
      </Header>

      <View style={styles.container}>
        <Text style={styles.leading}>Are you ready for your daily goal?</Text>

        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search available books..."
            placeholderTextColor={theme.colors.textColor}
            style={styles.textInputStyle}
          />

          <SearchIcon width={horizontalScale(20)} height={verticalScale(20)} />
        </View>

        <Animated.View
          entering={FadeInDown.withInitialValues({
            opacity: 0.5,
            transform: [{ translateY: 50 }],
          })
            .duration(1200)
            .easing(Easing.elastic(0.9))}
          style={styles.trendingContainer}
        >
          <View style={styles.trendingTextsContainer}>
            <Text style={styles.trendingTextHeader}>Trending</Text>

            <Text style={styles.trendingTextLeading}>See all</Text>
          </View>

          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item, index }) => {
              return (
                <View
                  key={index}
                  style={{
                    height: verticalScale(127),
                    width: horizontalScale(85),
                    borderRadius: moderateScale(5),
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={item}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ width: horizontalScale(15) }}></View>;
            }}
          />
        </Animated.View>

        <View style={styles.trendingContainer}>
          <View style={styles.trendingTextsContainer}>
            <Text style={styles.trendingTextHeader}>Continue Reading</Text>
          </View>
        </View>

        <View style={styles.trendingContainer}>
          <View style={styles.trendingTextsContainer}>
            <Text style={styles.trendingTextHeader}>Fictional</Text>
          </View>

          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item, index }) => {
              return (
                <View
                  key={index}
                  style={{
                    height: verticalScale(160),
                    width: horizontalScale(120),
                    borderRadius: moderateScale(5),
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={item}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ width: horizontalScale(15) }}></View>;
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

    scrollContainer: { paddingHorizontal: horizontalScale(20) },

    container: {
      paddingVertical: verticalScale(15),
      paddingHorizontal: horizontalScale(10),
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

    trendingContainer: {
      marginTop: verticalScale(50),
      transformOrigin: "left",
      rowGap: verticalScale(15),
    },

    trendingTextsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    trendingTextHeader: {
      fontFamily: "ArimaBold",
      fontSize: moderateScale(20),
      color: colors.mainTextColor,
    },

    trendingTextLeading: {
      fontFamily: "ArimaRegular",
      fontSize: moderateScale(12, -1.5),
      color: colors.textColor,
    },
  });
}
