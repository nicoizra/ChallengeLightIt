import React from 'react';
import { StyleSheet, View, TextInputProps, TextInput as Input } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../theme';
import CustomText from './CustomText';

export interface InputProps extends Partial<TextInputProps> {
  icon?: string;
  error?: string | null;
}

export const TextInput: React.FC<InputProps> = ({ icon, error, ...InputProps }) => {
  return (
    <>
      <View style={[styles.searchSection, styles.shadow, { borderWidth: error ? 1 : 0 }]}>
        <Input
          placeholderTextColor={theme.colors.secondaryText}
          style={[styles.input, InputProps.style]}
          {...InputProps}
        />
        {icon && <Icon name={icon} size={wp(6)} color={theme.colors.primary} />}
      </View>
      {error && (
        <CustomText color={theme.colors.error} style={styles.error}>
          {error}
        </CustomText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.elevation.level1,
    borderRadius: theme.roundness,
    padding: wp(2.5),
    borderColor: theme.colors.error,
  },
  error: {
    marginHorizontal: theme.roundness,
  },
  input: {
    paddingHorizontal: wp(2),
    flex: 1,
    fontSize: theme.sizes[16],
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
