import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

//the baseline dimension used here is the iphone X
const guidelineBaseWidth = 428;
const guidelineBaseHeight = 932;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
