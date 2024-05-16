import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TabsIcon(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.667 22.667h18.666M6.667 16h18.666M6.667 9.333h18.666"
        stroke="#D1C392"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TabsIcon;
