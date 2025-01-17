import { horizontalScale, verticalScale, moderateScale } from "@/lib/helpers";
import { Image, ImageSourcePropType, View } from "react-native";

export default function FlatlistImage({
  source,
  height,
  width,
  radius = 5,
}: {
  source: ImageSourcePropType;
  height: number;
  width: number;
  radius?: number;
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
      <Image
        source={source}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </View>
  );
}
