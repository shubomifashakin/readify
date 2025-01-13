import { createTheme, Colors } from "@rneui/themed";

// themed.d.ts
import "@rneui/themed";

//add the following properties to the namespace
declare module "@rneui/themed" {
  export interface Colors {
    tertiary: string;
    danger: string;
    active: string;
    textColor: string;
    mainTextColor: string;
    pressed: string;
  }
}
export const ThemeColors = {
  light: {
    background: "#F5F5F5",
    white: "#F9F9F9",
    textColor: "#686D76",
    mainTextColor: "#0D0D0D",
    pressed: "#0D0D0D3",
  } as Colors,

  dark: {
    background: "#F5F5F5",
    white: "#F9F9F9",
    textColor: "#686D76",
    mainTextColor: "#0D0D0D",
  } as Colors,
};

//this creates the theme
export const theme = createTheme({
  lightColors: ThemeColors.light,
  darkColors: ThemeColors.dark,
  mode: "light", //we set the current color mode to dark
});
