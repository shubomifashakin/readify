import { Link } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

import { horizontalScale, verticalScale, moderateScale } from "@/lib/helpers";

export default function FlatlistImage({
  source,
  height,
  width,
  radius = 5,
  isLink = false,
}: {
  source: ImageSourcePropType;
  height: number;
  width: number;
  radius?: number;
  isLink?: boolean;
}) {
  return (
    <View
      style={{
        height: verticalScale(height),
        width: horizontalScale(width),
        borderRadius: moderateScale(radius),
        overflow: "hidden",
      }}
    >
      {isLink ? (
        <Link
          href={{
            pathname: "/reading",
            params: {
              image: JSON.stringify(source),
            },
          }}
        >
          <Image
            source={source}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Link>
      ) : (
        <Image
          source={source}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <Link
        href={{
          pathname: "/reading",
          params: {
            image: JSON.stringify(source),
          },
        }}
      >
        <Image
          source={source}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Link>
    </View>
  );
}
