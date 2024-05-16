import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props) {
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
        d="M20 20l8 8m-14.667-5.333a9.333 9.333 0 110-18.667 9.333 9.333 0 010 18.667z"
        stroke="#D1C392"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
