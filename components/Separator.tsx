import { DimensionValue, StyleProp, View, ViewStyle } from "react-native";

import { horizontalScale, verticalScale } from "@/lib/helpers";

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
