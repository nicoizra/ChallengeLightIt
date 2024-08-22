import React from 'react';
import { PatientsProvider } from './patients';

export const AppProvider = ({ children }: any) => {
  return <PatientsProvider>{children}</PatientsProvider>;
};
