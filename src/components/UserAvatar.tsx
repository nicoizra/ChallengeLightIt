import { DimensionValue, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../theme';

interface Props {
  avatarUrl: string;
  width?: DimensionValue;
}

const UserAvatar = ({ avatarUrl, width }: Props) => {
  const [imageSrc, setImageSrc] = useState({ uri: avatarUrl });

  // En caso de no poder mostar la imagen, se va a mostrar una imagen default que está en nuestro directorio
  return (
    <Image
      style={[styles.avatar, { width }]}
      source={imageSrc}
      onError={() => setImageSrc(require('../assets/img/avatar.jpg'))}
    />
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: theme.roundness,
  },
});
