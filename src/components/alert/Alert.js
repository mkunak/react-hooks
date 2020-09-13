import React from 'react';
import { useAlert } from './AlertContext';

export default function Alert() {
  const { alert, hide } = useAlert();

  if (!alert) return null;

  return (
    <div className="alert alert-danger ml-5 mr-5 mt-2 pb-4">
      <button onClick={hide}>Close</button>
      <p className="text-center h2">Important message from child component.</p>
    </div>
  );
}
