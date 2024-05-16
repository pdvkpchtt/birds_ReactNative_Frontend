import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function EyeIcon({ crossed = false }) {
  return (
    <>
      {crossed ? (
        <Svg
          width={19}
          height={19}
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <Path fill="url(#pattern0_64_2)" d="M0 0H19V19H0z" />
          <Path
            d="M3 17.142L17.142 3"
            stroke="#9D9C9C"
            strokeWidth={1.3}
            strokeLinecap="round"
          />
          <Defs>
            <Pattern
              id="pattern0_64_2"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#image0_64_2" transform="scale(.01042)" />
            </Pattern>
            <Image
              id="image0_64_2"
              width={96}
              height={96}
              xlinkHref="data:image/png;base64,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"
            />
          </Defs>
        </Svg>
      ) : (
        <Svg
          width={19}
          height={19}
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <Path fill="url(#pattern0_5_11)" d="M0 0H19V19H0z" />
          <Defs>
            <Pattern
              id="pattern0_5_11"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#image0_5_11" transform="scale(.01042)" />
            </Pattern>
            <Image
              id="image0_5_11"
              width={96}
              height={96}
              xlinkHref="data:image/png;base64,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"
            />
          </Defs>
        </Svg>
      )}
    </>
  );
}

export default EyeIcon;
