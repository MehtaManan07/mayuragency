import { Path, Svg } from 'react-native-svg';
import { Props } from './types';
import { View } from 'react-native';

const BellIcon = ({ color, size, ...props }: Props) => (
  <View style={{ aspectRatio: 1, width: size }}>
    <Svg
      fill="none"
      height={'100%'}
      viewBox="0 0 24 24"
      width={'100%'}
      {...props}
    >
      <Path
        d="M9.002 17H5.606c-1.258 0-1.887 0-2.02-.098-.148-.11-.185-.174-.2-.358-.015-.164.37-.795 1.142-2.057C5.324 13.184 6 11.287 6 8.6c0-1.485.632-2.91 1.758-3.96C8.883 3.59 10.409 3 12 3c1.592 0 3.118.59 4.243 1.64C17.368 5.69 18 7.115 18 8.6c0 2.686.677 4.584 1.473 5.887.771 1.262 1.157 1.893 1.143 2.057-.017.184-.053.248-.202.358-.132.098-.761.098-2.02.098H15m-5.998 0L9 18a3 3 0 1 0 6 0v-1m-5.998 0H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  </View>
);

export default BellIcon;
