import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface IProfileIcon {
  color: string;
  focused: boolean;
}

const ProfileIcon = ({color, focused}: IProfileIcon) => {
  return (
    <Svg width="24" height="34" viewBox="0 0 24 34" fill="none">
      <Circle cx="12" cy="31" r="3" fill={focused ? color : 'transparent'} />
      <Path
        d="M5 21C5 18.7909 8.13401 17 12 17C15.866 17 19 18.7909 19 21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
