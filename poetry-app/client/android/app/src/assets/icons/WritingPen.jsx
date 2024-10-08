import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../utilities/colors"
const WritingPen = ({ width, height, fill }) => (
    <Svg
        xmlSpace="preserve"
        width={width || 24}
        height={height || 24}
        fill={fill || colors.primaryClr}
        viewBox="0 0 919.8 919.8"
    >
        <Path d="m684.833 209.4 27-33.8c37-46.2 29.5-113.7-16.801-150.7l-1.699-1.4c-46.2-37-113.7-29.5-150.7 16.8l-26.9 33.7 169.1 135.4z" />
        <Path d="M520.532 493.5c.9 8.199 5 16 11.9 21.6 13.9 11.1 34.2 8.9 45.3-5l185.5-232c11.3-14.1 8.8-34.8-5.7-45.8-14-10.6-34.1-7.6-45.1 6.1l-18.1 22.6-31-24.8.1-.1-169-135.5-432.4 540.5 169.1 135.4 392.1-490 31 24.8-126.8 158.5c-5.599 6.899-7.799 15.5-6.9 23.7zM203.032 801.5l-159.3-127.601c-2.6 8.9-3.9 16.7-3.9 16.7l-36.5 174.8c-2.6 12.601 10.2 22.9 21.9 17.5l162.6-74c-.1 0 7.1-3 15.2-7.399zM893.633 832.8c-1.4 0-2.7.1-4.101.3l-245.699 31.8c-12.601 1.601-21.4-12.2-14.601-23 3.7-5.7 7.3-11.5 10.9-17.3 9.5-15.4-3.2-35.9-20.8-35.9-1.2 0-2.4.101-3.7.301l-322 48.399-38.5 5.8-105 15.801c-11.9 1.8-19.9 11.899-18.9 24 .4 5.399 2.6 10.5 6.1 14.3 4.1 4.5 9.8 7 16 7 1.2 0 2.4-.101 3.7-.3l383.801-57.7c13.1-2 22.1 12.8 14.399 23.6-2.5 3.4-5 6.9-7.5 10.3-6.899 9.4-5.3 25.101 2.7 33.2 4.1 4.2 9.3 6.4 14.8 6.4.601 0 1.3 0 1.9-.101h.201l331.3-42.199h.201c5.699-.9 10.699-4.2 14-9.301 3.6-5.6 4.899-12.5 3.3-18.699-2.602-10.102-11.402-16.701-22.501-16.701z" />
    </Svg>
)
export default WritingPen
