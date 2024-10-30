import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface IRankingIcon {
  color: string;
  focused: boolean;
}

const RankingIcon = ({color, focused}: IRankingIcon) => {
  return (
    <Svg width="24" height="34" viewBox="0 0 24 34" fill="none">
      <Circle cx="12" cy="31" r="3" fill={focused ? color : 'transparent'} />
      <Path
        d="M14.735 8.74351L12.4158 3.76358C12.2522 3.41214 11.7478 3.41214 11.5842 3.76358L9.26501 8.74351C9.1983 8.88675 9.06125 8.98537 8.9031 9.00394L3.40457 9.64965C3.01652 9.69522 2.86068 10.1703 3.14757 10.433L7.21278 14.1565C7.3297 14.2636 7.38205 14.4232 7.35102 14.5779L6.27191 19.9569C6.19575 20.3365 6.60375 20.6301 6.94472 20.4411L11.7763 17.7624C11.9153 17.6853 12.0847 17.6853 12.2237 17.7624L17.0553 20.4411C17.3963 20.6301 17.8042 20.3365 17.7281 19.9569L16.649 14.5779C16.6179 14.4232 16.6703 14.2636 16.7872 14.1565L20.8524 10.433C21.1393 10.1703 20.9835 9.69522 20.5954 9.64965L15.0969 9.00394C14.9388 8.98537 14.8017 8.88674 14.735 8.74351Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RankingIcon;
