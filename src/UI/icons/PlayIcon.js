import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Pressable } from "react-native";

function PlayIcon({ onClick = () => console.log("sadaasd"), state = false }) {
  return (
    <Pressable onPress={onClick}>
      {state ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
        >
          <Path
            fill="none"
            stroke="#D1C392"
            strokeLinecap="round"
            strokeWidth={2}
            d="M7 5v14M17 5v14"
          />
        </Svg>
      ) : (
        <Svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M6.667 23.111V8.89c0-1.172 0-1.76.247-2.106.215-.303.547-.502.916-.55.422-.054.94.222 1.973.774l13.334 7.11.005.003c1.142.61 1.714.914 1.902 1.32.163.355.163.764 0 1.119-.188.406-.761.713-1.907 1.324l-13.334 7.11c-1.034.553-1.551.828-1.973.773a1.332 1.332 0 01-.916-.549c-.247-.347-.247-.933-.247-2.105z"
            stroke="#D1C392"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )}
    </Pressable>
  );
}

export default PlayIcon;
