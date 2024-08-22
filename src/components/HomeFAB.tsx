import { StyleSheet, View } from 'react-native';
import React from 'react';
import Button from './Button';
import { theme } from '../theme';
interface Props {
  onPress: () => void;
}
const HomeFAB = ({ onPress }: Props) => {
  return (
    <View style={styles.btnContainer}>
      <Button title="Agregar paciente" icon="plus" onPress={onPress} />
    </View>
  );
};

export default HomeFAB;

const styles = StyleSheet.create({
  btnContainer: {
    marginHorizontal: theme.padding,
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    alignSelf: 'center',
  },
});
