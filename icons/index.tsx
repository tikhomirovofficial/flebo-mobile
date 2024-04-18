import { FC } from "react";
import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";

export interface IconProps {
    width?: number,
    height?: number,
    stroke?: string
}
export const BackIcon: FC<IconProps> = ({ width = 32, height = 32 }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
            <Rect opacity="0.2" x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#454545" />
            <Path d="M20 9L12 16L20 23" stroke="#0BA0B5" strokeWidth="2" />
        </Svg>
    )
}