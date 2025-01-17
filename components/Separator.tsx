import { horizontalScale, verticalScale } from "@/lib/helpers";
import { ViewStyle } from "react-native";
import { DimensionValue, StyleProp, View } from "react-native";

export default function Separator({
  width,
  height,
  isPercentageHeight,
  isPercentageWidth,
  styles,
}: {
  width: DimensionValue;
  height: DimensionValue;
  isPercentageWidth: boolean;
  isPercentageHeight: boolean;
  styles?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        {
          width: isPercentageWidth ? width : horizontalScale(Number(width)),
          height: isPercentageHeight ? height : verticalScale(Number(height)),
        },
        styles,
      ]}
    ></View>
  );
}
