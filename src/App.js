import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Basicvalidation } from './components/Basicvalidation';

function App() {
  return (
    <div className="App container">
      <h2 className="text-center">Form Validation with React Hook Form</h2>
      <Basicvalidation />
    </div>
  );
}

export default App;
