import React, { createContext, useContext, useState } from 'react';
import { Patient } from '../types';
import { PATIENTS_API_URL } from '../consts';

interface PatientsContextType {
  loading: boolean;
  fetchData: () => void;
  filteredPatients: Array<Patient>;
  filterList: (search: string) => void;
  editPatient: (newPatient: Patient) => void;
  addNewPatient: (newPatient: Patient) => void;
}

const PatientsContext = createContext<PatientsContextType | undefined>(undefined);

export const PatientsProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

  const fetchData = async () => {
    setLoading(true);
    fetch(PATIENTS_API_URL)
      .then((results) => results.json())
      .then((res) => {
        const mapped = mapData(res);
        setPatients(mapped);
        setFilteredPatients(mapped);
      })
      .catch((error) => console.error('Error when fetching:', error))
      .finally(() => setLoading(false));
  };

  const mapData = (data: Array<any>): Array<Patient> => {
    return data.map((patient) => {
      const mappedPatient: Patient = {
        name: patient.name,
        description: patient.description,
        id: patient.id,
        website: patient.website,
        createdAt: new Date(patient.createdAt),
        avatar: patient.avatar,
      };
      return mappedPatient;
    });
  };

  const filterList = (search: string) => {
    setFilteredPatients(
      patients.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    );
  };

  const editPatient = (newPatient: Patient) => {
    let newList = [...patients];
    const index = patients.findIndex((pat) => pat.id === newPatient.id);

    newList[index] = newPatient;

    setPatients(newList);
    setFilteredPatients(newList);
  };
  const addNewPatient = (newPatient: Patient) => {
    let newList = [newPatient, ...patients];

    setPatients(newList);
    setFilteredPatients(newList);
  };

  return (
    <PatientsContext.Provider
      value={{ loading, fetchData, filteredPatients, filterList, editPatient, addNewPatient }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatientsContext = () => {
  const context = useContext(PatientsContext);
  if (!context) {
    throw new Error('usePatientsContext must be used within a PatientsProvider');
  }
  return context;
};
