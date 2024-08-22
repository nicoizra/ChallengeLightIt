import { SafeAreaView, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { usePatientsContext } from '../providers/patients';
import HomeHeader from '../components/HomeHeader';
import { styles } from '../styles/home';
import ModalEditar from '../components/ModalEditar';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { Patient } from '../types';
import PatientsList from '../components/PatientsList';
import HomeFAB from '../components/HomeFAB';
import { showAddedToast, showEditedToast } from '../helpers/toasts';

const Home = () => {
  const { fetchData, filteredPatients, filterList, loading, editPatient, addNewPatient } =
    usePatientsContext();
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [editing, setEditing] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnPressFAB = () => {
    setEditing(false);
    setSelectedPatient(null);
    actionSheetRef.current?.show();
  };

  const handlePressEditar = (patient: Patient) => {
    setEditing(true);
    setSelectedPatient(patient);
    actionSheetRef.current?.show();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <HomeHeader
          onSearch={(text) => {
            setOpenItemIndex(-1);
            filterList(text);
          }}
        />
        <View style={styles.content}>
          <PatientsList
            openItemIndex={openItemIndex}
            setOpenItemIndex={setOpenItemIndex}
            handlePressEditar={handlePressEditar}
            loading={loading}
            filteredPatients={filteredPatients}
          />
        </View>
        <HomeFAB onPress={handleOnPressFAB} />
      </SafeAreaView>
      <ActionSheet ref={actionSheetRef}>
        <ModalEditar
          selectedPatient={selectedPatient}
          onSaveEdit={(editedPatient) => {
            editPatient(editedPatient);
            setOpenItemIndex(-1);
            actionSheetRef.current?.hide();
            showEditedToast(editedPatient.name);
          }}
          onSaveAdd={(newPatient) => {
            addNewPatient(newPatient);
            setOpenItemIndex(-1);
            actionSheetRef.current?.hide();
            showAddedToast();
          }}
          editing={editing}
        />
      </ActionSheet>
    </>
  );
};

export default Home;
