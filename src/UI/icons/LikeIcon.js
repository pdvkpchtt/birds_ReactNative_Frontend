import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LikeIcon({ fill = false }) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16 10.259c-2.667-6.26-12-5.593-12 2.407s12 14.667 12 14.667 12-6.666 12-14.666S18.667 4 16 10.258z"
        stroke="#D1C392"
        fill={fill ? "#D1C392" : "transparent"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LikeIcon;
