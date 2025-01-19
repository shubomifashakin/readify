import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HeartIcon = (props: SvgProps) => (
  <Svg width={20} height={17} viewBox="0 0 20 17" fill="none" {...props}>
    <Path
      d="M6.25002 1.33337C3.71877 1.33337 1.66669 3.38546 1.66669 5.91671C1.66669 10.5 7.08335 14.6667 10 15.6359C12.9167 14.6667 18.3334 10.5 18.3334 5.91671C18.3334 3.38546 16.2813 1.33337 13.75 1.33337C12.2 1.33337 10.8292 2.10296 10 3.28087C9.57731 2.67895 9.01583 2.18771 8.36309 1.84872C7.71034 1.50973 6.98554 1.33296 6.25002 1.33337Z"
      stroke="#F9F9F9"
      strokeWidth={1.91429}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HeartIcon;
