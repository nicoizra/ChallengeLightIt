import { Linking, StyleSheet, View } from 'react-native';
import React from 'react';
import { Patient } from '../types';
import { theme } from '../theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import UserAvatar from './UserAvatar';

interface Props {
  patient: Patient;
  onPress: () => void;
  onPressEditar: () => void;
}

const BotonEditar = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.containerEditar} onPress={onPress}>
      <Icon name="pencil" color={theme.colors.outline} />
      <CustomText color={theme.colors.outline}>Editar</CustomText>
    </TouchableOpacity>
  );
};
const DetailsPatientCard = ({ patient, onPress, onPressEditar }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, styles.shadow]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <UserAvatar width={wp(20)} avatarUrl={patient.avatar} />
        <View style={styles.textContainer}>
          <CustomText size="18">{patient.name}</CustomText>
          <BotonEditar onPress={onPressEditar} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chevron-up" size={24} color={theme.colors.primary} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginVertical: 3 }}>
        <Icon name="information" size={12} color={theme.colors.primary} />
        <CustomText
          size="12"
          color={theme.colors.secondaryText}
          style={{ marginLeft: wp(1), marginTop: -3 }}
        >
          {patient.description}
        </CustomText>
      </View>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 3 }}
        onPress={async () => await Linking.openURL(patient.website)}
      >
        <Icon name="web" size={12} color={theme.colors.primary} />
        <CustomText size="12" color={theme.colors.secondaryText} style={{ marginLeft: wp(1) }}>
          {patient.website}
        </CustomText>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginVertical: 3, alignItems: 'center' }}>
        <Icon name="calendar" size={12} color={theme.colors.primary} />
        <CustomText
          size="12"
          color={theme.colors.secondaryText}
          style={{ marginLeft: wp(1), marginTop: -1 }}
        >
          Creado el: {patient.createdAt.toLocaleDateString()}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default DetailsPatientCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.elevation.level1,
    paddingVertical: 10,
    borderRadius: theme.roundness,
    paddingHorizontal: wp(4),
    marginVertical: 8,
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

  iconContainer: {
    alignSelf: 'center',
  },
  textContainer: {
    marginLeft: wp(4),
    paddingVertical: 10,
    flex: 1,
  },
  containerEditar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderBottomColor: theme.colors.outline,
    borderBottomWidth: 0.5,
    alignSelf: 'flex-start',
  },
});
