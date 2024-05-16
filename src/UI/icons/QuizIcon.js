import * as React from "react";
import Svg, { Path } from "react-native-svg";

function QuizIcon({ stroke = "#9F8546" }) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.659 14.608A6.666 6.666 0 1120 23.334V25m.083 6.667v.166h-.166v-.166h.166z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default QuizIcon;
