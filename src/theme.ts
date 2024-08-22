import { DefaultTheme } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const theme = {
  ...DefaultTheme,
  roundness: 20,
  TAPRoundness: 15,
  padding: wp(5),
  colors: {
    ...DefaultTheme.colors,
    primary: '#b491c8',
    text: '#040415',
    secondaryText: '#7f7f7f',
    success: '#06C270',
    yellow: '#e2c315',
  },

  sizes: {
    '36': wp(9),
    '18': wp(4.4),
    '16': wp(3.9),
    '14': wp(3.6),
    '12': wp(3.1),
    '8': wp(2.6),
  },
};
