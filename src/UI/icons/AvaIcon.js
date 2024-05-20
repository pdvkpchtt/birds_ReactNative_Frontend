import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AvaIcon(props) {
  return (
    <Svg
      width={157}
      height={157}
      viewBox="0 0 157 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M112.625 126.465c-8.384-9.364-20.566-15.257-34.125-15.257-13.559 0-25.742 5.893-34.127 15.257m34.127 10.91c-32.516 0-58.875-26.359-58.875-58.875S45.985 19.625 78.5 19.625c32.516 0 58.875 26.36 58.875 58.875 0 32.516-26.359 58.875-58.875 58.875zm0-45.792c-10.839 0-19.625-8.786-19.625-19.625 0-10.838 8.786-19.625 19.625-19.625s19.625 8.787 19.625 19.625c0 10.839-8.786 19.625-19.625 19.625z"
        stroke="#D1C392"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AvaIcon;
