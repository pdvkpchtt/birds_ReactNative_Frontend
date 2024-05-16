import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ProfileIcon({ stroke = "#9F8546" }) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M28.694 32.22A11.638 11.638 0 0020 28.334a11.638 11.638 0 00-8.695 3.888M20 35c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-11.667a5 5 0 110-10 5 5 0 010 10z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProfileIcon;
