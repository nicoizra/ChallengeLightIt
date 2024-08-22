import Toast from 'react-native-toast-message';

export const showAddedToast = () => {
  Toast.show({
    type: 'success',
    text1: 'Has agregado un nuevo paciente',
  });
};

export const showEditedToast = (patientName: string) => {
  Toast.show({
    type: 'success',
    text1: 'Has editado a ' + patientName,
  });
};
