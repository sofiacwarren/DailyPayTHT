import React, { useState, useEffect } from 'react';
import './App.css';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';

function App() {
  //fetch data
  useEffect(() => {
    api.getBallotData()
      .then((res) => {
        console.log(res.items)
      })
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Ballot />
    </div>
  );
}

export default App;
