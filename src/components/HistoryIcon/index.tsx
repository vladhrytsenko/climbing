import React from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

interface IHistoryIcon {
  color: string;
  focused: boolean;
}

const HistoryIcon = ({color, focused}: IHistoryIcon) => {
  return (
    <Svg width="24" height="34" viewBox="0 0 24 34" fill="none">
      <Circle cx="12" cy="31" r="3" fill={focused ? color : 'transparent'} />
      <G clipPath="url(#clip0_11_473)">
        <Path
          d="M5.63606 18.364C9.15077 21.8787 14.8493 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8493 2.12132 9.15077 2.12132 5.63606 5.63604C3.87757 7.39453 2.99889 9.69966 3.00002 12.0044L3 14"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1 12L3 14L5 12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11 8L11 13L16 13"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_11_473">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HistoryIcon;
