import { Text, TextProps, TextStyle } from 'react-native';
import React from 'react';
import { theme } from '../theme';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  size?: '36' | '18' | '16' | '14' | '12' | '8';
  color?: string;
  weight?: '900' | '800' | '700' | '600' | '500' | '400' | '300';
  style?: TextStyle;
}
const CustomText = ({
  children,
  size = '14',
  color = theme.colors.text,
  weight = '600',
  style = {},
  ...props
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: theme.sizes[size],
          lineHeight: theme.sizes[size] * 1.5,
          color,
          fontWeight: weight,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomText;
