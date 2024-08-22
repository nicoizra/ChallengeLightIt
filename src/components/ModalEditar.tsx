import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Patient } from '../types';
import { theme } from '../theme';
import { TextInput } from './TextInput';
import CustomText from './CustomText';
import Button from './Button';
import uuid from 'react-native-uuid';
import { launchImageLibrary } from 'react-native-image-picker';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  selectedPatient: Patient | null;
  onSaveEdit: (editedPatient: Patient) => void;
  onSaveAdd: (newPatient: Patient) => void;
  editing: boolean;
}

const ModalEditar = ({ selectedPatient, editing, onSaveEdit, onSaveAdd }: Props) => {
  const [name, setName] = useState(selectedPatient?.name || '');
  const [description, setDescription] = useState(selectedPatient?.description || '');
  const [website, setWebsite] = useState(selectedPatient?.website || '');
  const [avatar, setAvatar] = useState(selectedPatient?.avatar || '');

  const handleImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            setAvatar(uri);
          }
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        <CustomText>🗣️ Nombre:</CustomText>
        <TextInput
          placeholder="Nombre..."
          value={name}
          onChangeText={setName}
          error={name === '' ? 'Debe ingresar un nombre' : null}
        />
      </View>
      <View style={styles.gap}>
        <CustomText>📖 Descripcion:</CustomText>
        <TextInput
          error={description === '' ? 'Debe ingresar una descripcion' : null}
          placeholder="Descripcion..."
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.gap}>
        <CustomText>🌐 Website:</CustomText>
        <TextInput placeholder="Website..." value={website} onChangeText={setWebsite} />
      </View>

      <View style={styles.gap}>
        <CustomText>📸 Foto:</CustomText>

        {avatar && <Image source={{ uri: avatar }} style={styles.image} />}
        <Button
          title="Seleccionar foto"
          onPress={handleImagePicker}
          buttonColor={theme.colors.elevation.level1}
          titleColor={theme.colors.secondaryText}
        />
      </View>

      <Button
        title="Guardar"
        disabled={name === '' || description === ''}
        onPress={() => {
          const newPatient: Patient = {
            name,
            description,
            website,
            avatar,
            createdAt: selectedPatient?.createdAt || new Date(),
            id: selectedPatient?.id || uuid.v4().toString(),
          };
          editing ? onSaveEdit(newPatient) : onSaveAdd(newPatient);
        }}
      />
    </View>
  );
};

export default ModalEditar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: theme.padding,
    borderTopLeftRadius: theme.roundness,
    borderTopRightRadius: theme.roundness,
    gap: 20,
  },
  gap: {
    gap: 3,
  },
  image: {
    width: wp(20),
    aspectRatio: 1,
    borderRadius: theme.roundness,
    alignSelf: 'center',
  },
});
