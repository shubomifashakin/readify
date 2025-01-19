import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import SearchIcon from "@/components/svgs/searchIcon";

import { Colors } from "@rneui/base";
import { useTheme } from "@rneui/themed";

import { horizontalScale, moderateScale, verticalScale } from "@/lib/helpers";
import Separator from "@/components/Separator";
import HeadingText from "@/components/HeadingText";

const trendingBooks = [
  "Unbreak the broken",
  "Broken",
  "The sea goddess",
  "The vegan town",
  "Sorry i dont relate",
  "One more dance with you",
  "Please dont say goodbye",
  "It was unexpected",
  "The girl from the hood",
  "The impossible",
  "One good turn",
  "We are born to live",
  "The impossible",
  "We are born to live",
];

export default function Search() {
  const { theme } = useTheme();

  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <HeadingText>Search</HeadingText>

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

      <FlatList
        data={trendingBooks}
        ListHeaderComponent={<HeadingText>Trending</HeadingText>}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                columnGap: horizontalScale(12),
                alignItems: "center",
              }}
            >
              <SearchIcon
                fill={theme.colors.textColor}
                width={horizontalScale(20)}
                height={verticalScale(20)}
              />

              <Text
                style={{
                  fontFamily: "ArimaMedium",
                  fontSize: moderateScale(16),
                }}
              >
                {item}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <Separator
            height={verticalScale(20)}
            isPercentageHeight={false}
            isPercentageWidth={true}
            width={"100%"}
          />
        )}
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

    searchBarContainer: {
      borderRadius: moderateScale(30),
      width: "100%",
      height: verticalScale(45),
      alignSelf: "center",
      overflow: "hidden",
      backgroundColor: colors.white,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: horizontalScale(20),
      marginVertical: verticalScale(25),
      alignItems: "center",
      columnGap: horizontalScale(10),
    },

    textInputStyle: {
      fontFamily: "ArimaRegular",
      fontSize: moderateScale(16),
      flex: 1,
      height: "100%",
    },
  });
}
