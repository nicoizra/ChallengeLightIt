import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: theme.roundness * 2,
    paddingTop: 10,
    flex: 1,
  },
});
