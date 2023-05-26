
import { useState } from 'react';
import './App.css';
import Test from './EightForm/Test';
import Schedule from './FifthForm/Schedule';
import Musik from './FirdForm/Musik';
import Header from './FirstForm/Header';
import Singers from './FothForm/Singers';

import Shots from './NineForm/Shots';
import Category from './SecondForm/Category';
import Sponsor from './SevenForm/Sponsor';
import Tier from './SixthForm/Tier';
import End from './TenForm/End';
import React from 'react';



function App() {
 
  return (
   
    <div class='all'>
      
      <div class='firstForm'>
        <Header />
      </div>
      <div class='secondForm'>
        <Category />
      </div>
      <div class='firdForm'>
        <Musik />
      </div>
      <div class='fothForm'>
        <Singers />
      </div>
      <div class='fiveForm'>
        <Schedule />
      </div>
      <div class='sixForm'>
        <Tier />
      </div>
      <div class='sevenForm'>
        <Sponsor />
      </div>
      <div class='eightForm'>
        <Test />
      </div>
      <div className='nineForm'>
        <Shots />

      </div>
      <div className='tenForm'>
        <End/> </div>
    </div>

  );
}

export default App;
