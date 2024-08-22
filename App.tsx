import 'react-native-gesture-handler';
import React from 'react';

import { AppProvider } from './src/providers';
import Home from './src/screens/home';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <Home />
      <Toast />
    </AppProvider>
  );
}

export default App;
