import { withSpring, withTiming } from "react-native-reanimated";

export const slideInRight = (targetValues: any) => {
  "worklet";
  const animations = {
    originX: withTiming(targetValues.targetOriginX, { duration: 600 }),
    opacity: withTiming(1, { duration: 1000 }),
  };
  const initialValues = {
    opacity: 0,
    originX: 200,
  };
  return {
    initialValues,
    animations,
  };
};
