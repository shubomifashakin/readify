import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BellIcon = (props: SvgProps) => (
  <Svg width={21} height={23} viewBox="0 0 21 23" fill="none" {...props}>
    <Path
      d="M16.75 7.33337C16.75 5.67577 16.0915 4.08606 14.9194 2.91396C13.7473 1.74185 12.1576 1.08337 10.5 1.08337C8.8424 1.08337 7.25268 1.74185 6.08058 2.91396C4.90848 4.08606 4.25 5.67577 4.25 7.33337C4.25 14.625 1.125 16.7084 1.125 16.7084H19.875C19.875 16.7084 16.75 14.625 16.75 7.33337Z"
      stroke="#0D0D0D"
      strokeWidth={2.08333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.3021 20.875C12.119 21.1907 11.8561 21.4528 11.5398 21.6349C11.2236 21.8171 10.865 21.913 10.5 21.913C10.135 21.913 9.77647 21.8171 9.4602 21.6349C9.14393 21.4528 8.88107 21.1907 8.69794 20.875"
      stroke="#0D0D0D"
      strokeWidth={2.08333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BellIcon;
