import { StyleSheet, View } from 'react-native';
import React from 'react';
import { theme } from '../theme';
import CustomText from './CustomText';
import { TextInput } from './TextInput';
interface Props {
  onSearch: (a: string) => void;
}
const HomeHeader = ({ onSearch }: Props) => {
  return (
    <View style={styles.container}>
      <CustomText color="#fff" size="36">
        Pacientes
      </CustomText>

      <TextInput icon="search" onChangeText={onSearch} placeholder="Ingrese un nombre..." />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.padding,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
  },
});
