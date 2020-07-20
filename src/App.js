import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo  from './profile/ProfilPhoto'
import Adress  from './profile/Address'
import Name  from './profile/FullName'

import { render } from '@testing-library/react';

function App(){
   return (
    <div className="App">
     <Photo/>
     <Name/> 
     <Adress/>
    </div>
  );
  }
export default App;