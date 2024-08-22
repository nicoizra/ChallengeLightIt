import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Patient } from '../types';
import { theme } from '../theme';
import { TextInput } from './TextInput';
import CustomText from './CustomText';
import Button from './Button';
import uuid from 'react-native-uuid';

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
      <Button
        title="Guardar"
        disabled={name === '' || description === ''}
        onPress={() => {
          const newPatient: Patient = {
            name,
            description,
            website,
            avatar: selectedPatient?.avatar || '',
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
});
