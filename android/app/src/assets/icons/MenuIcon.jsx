import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MenuIcon = ({ fill, onPress }) => (
    <Svg
        width={37}
        height={40}
        fill="none"
        onPress={onPress}
    >
        <Path
            fill={fill || "#FAF9F6"}
            d="M32.375 12.917H4.625c-.632 0-1.156-.567-1.156-1.25 0-.684.524-1.25 1.156-1.25h27.75c.632 0 1.156.566 1.156 1.25 0 .683-.524 1.25-1.156 1.25ZM32.375 21.25H4.625c-.632 0-1.156-.567-1.156-1.25s.524-1.25 1.156-1.25h27.75c.632 0 1.156.567 1.156 1.25s-.524 1.25-1.156 1.25ZM32.375 29.583H4.625c-.632 0-1.156-.566-1.156-1.25 0-.683.524-1.25 1.156-1.25h27.75c.632 0 1.156.567 1.156 1.25 0 .684-.524 1.25-1.156 1.25Z"
        />
    </Svg>
)
export default MenuIcon
