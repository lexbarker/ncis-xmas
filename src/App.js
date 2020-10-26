import React from 'react';
import './App.css';
import { HeadingFed } from './components/headers/header.component';
import { Clocks } from './components/clocks/clocks.component';
import {DoorsSetup} from './components/doors-setup/doors-setup.component';

function App() {
  return (
    <div className="App">
      
      <HeadingFed />
      <Clocks />
      <DoorsSetup />
      


    </div>
  );
}

export default App;
