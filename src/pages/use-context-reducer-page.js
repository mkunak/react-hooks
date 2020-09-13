import React from 'react';
import Main from '../components/Main'
import Alert from '../components/alert/Alert';
import { AlertProvider } from '../components/alert/AlertContext';

function UseContextReducerPage() {
  return (
    <AlertProvider>
      <Main />
      <Alert />
    </AlertProvider>
  );
}

export default UseContextReducerPage;