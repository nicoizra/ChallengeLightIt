import { Image, Linking, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Patient } from '../types';
import { theme } from '../theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface Props {
  patient: Patient;
  onPress: () => void;
  index: number;
}

const PatientCard = ({ patient, onPress, index }: Props) => {
  const [imageUrl, setImageUrl] = useState({ uri: patient.avatar });

  return (
    <Animated.View key={index.toString()} entering={FadeIn}>
      <TouchableOpacity style={[styles.container, styles.shadow]} onPress={onPress}>
        <Image
          onError={() => setImageUrl(require('../assets/img/avatar.jpg'))}
          style={styles.avatar}
          source={imageUrl}
        />
        <View style={styles.textContainer}>
          <CustomText size="16">{patient.name}</CustomText>
          <TouchableOpacity
            style={styles.webContainer}
            onPress={async () => await Linking.openURL(patient.website)}
          >
            <Icon name="web" size={12} color={theme.colors.primary} />
            <CustomText
              size="12"
              color={theme.colors.secondaryText}
              style={{ marginLeft: wp(1) }}
              numberOfLines={1}
            >
              {patient.website}
            </CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chevron-down" size={24} color={theme.colors.primary} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PatientCard;

const styles = StyleSheet.create({
  avatar: {
    width: wp(15),
    aspectRatio: 1,
    borderRadius: theme.roundness,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
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
  webContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
});
