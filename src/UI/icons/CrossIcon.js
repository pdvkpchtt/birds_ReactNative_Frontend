import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CrossIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
        stroke="#D1C392"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CrossIcon;
