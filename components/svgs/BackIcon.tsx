import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BackIcon = (props: SvgProps) => (
  <Svg width={8} height={15} viewBox="0 0 8 15" fill="none" {...props}>
    <Path
      d="M7.94585 1.85413L6.84064 0.749961L0.820847 6.76767C0.723811 6.86409 0.646802 6.97876 0.594252 7.10506C0.541702 7.23136 0.514648 7.36681 0.514648 7.50361C0.514648 7.6404 0.541702 7.77585 0.594252 7.90215C0.646802 8.02846 0.723811 8.14312 0.820847 8.23954L6.84064 14.2604L7.9448 13.1562L2.29481 7.50517L7.94585 1.85413Z"
      fill="#0D0D0D"
    />
  </Svg>
);
export default BackIcon;
