import { withSpring, withTiming } from "react-native-reanimated";

export const customEntering = (targetValues: any) => {
  "worklet";
  const animations = {
    originY: withTiming(targetValues.targetOriginY, { duration: 600 }),
    originX: withTiming(targetValues.targetOriginX, { duration: 600 }),
    opacity: withTiming(1, { duration: 600 }),
    transform: [{ scale: withTiming(1, { duration: 400 }) }],
  };
  const initialValues = {
    opacity: 0,
    transform: [{ scale: 0.5 }],
    originY: 400,
    originX: -50,
  };
  return {
    initialValues,
    animations,
  };
};
