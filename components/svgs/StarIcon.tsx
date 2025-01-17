import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const StarIcon = (props: SvgProps) => (
  <Svg width={11} height={10} viewBox="0 0 11 10" fill="none" {...props}>
    <Path
      d="M4.44033 7.01046L5.75283 6.21879L7.06533 7.02087L6.72158 5.52087L7.87783 4.52087L6.357 4.38546L5.75283 2.96879L5.14867 4.37504L3.62783 4.51046L4.78408 5.52087L4.44033 7.01046ZM3.17992 8.75004L3.857 5.82296L1.58617 3.85421L4.58617 3.59379L5.75283 0.833374L6.9195 3.59379L9.9195 3.85421L7.64867 5.82296L8.32575 8.75004L5.75283 7.19796L3.17992 8.75004Z"
      fill="#F8C50B"
    />
  </Svg>
);
export default StarIcon;
