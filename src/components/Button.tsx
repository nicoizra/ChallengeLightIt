import { StyleSheet } from 'react-native';
import React from 'react';
import { Button as Btn, ButtonProps } from 'react-native-paper';
import { theme } from '../theme';

export interface BtnProps extends Partial<ButtonProps> {
  title?: string;
  titleColor?: string;
}

export const Button: React.FC<BtnProps> = ({
  title = 'Boton',
  titleColor = '#fff',
  ...Props
}: BtnProps) => {
  return (
    <Btn
      labelStyle={[styles.text, { color: titleColor || theme.colors.text }]}
      uppercase={false}
      mode="contained"
      buttonColor={theme.colors.primary}
      {...Props}
      style={[styles.btn, Props.style]}
    >
      {title}
    </Btn>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 5,
    borderRadius: theme.roundness,
    paddingVertical: 3,
  },

  text: {
    fontSize: theme.sizes[14],
    color: theme.colors.text,
    fontWeight: 'bold',
  },
});
