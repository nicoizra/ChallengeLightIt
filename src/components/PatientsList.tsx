import { ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { theme } from '../theme';
import DetailsPatientCard from './DetailsPatientCard';
import PatientCard from './PatientCard';
import { Patient } from '../types';

interface Props {
  loading: boolean;
  filteredPatients: Array<Patient>;
  handlePressEditar: (arg0: Patient, arg1: number) => void;
  openItemIndex: number;
  setOpenItemIndex: (arg: number) => void;
}

const PatientsList = ({
  loading,
  filteredPatients,
  handlePressEditar,
  openItemIndex,
  setOpenItemIndex,
}: Props) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{ paddingHorizontal: theme.padding, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
          data={filteredPatients}
          renderItem={({ item, index }) =>
            openItemIndex === index ? (
              <DetailsPatientCard
                patient={item}
                onPress={() => setOpenItemIndex(-1)}
                onPressEditar={() => handlePressEditar(item, index)}
              />
            ) : (
              <PatientCard patient={item} onPress={() => setOpenItemIndex(index)} index={index} />
            )
          }
        />
      )}
    </>
  );
};

export default PatientsList;
