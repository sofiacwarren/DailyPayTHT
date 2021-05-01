import React, { useState, useEffect } from 'react';
import './App.css';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';

function App() {
  //state vars
  const [ ballotData, setBallotData ] = useState([]);
  const [ formSelection, setSelection ] = useState([]);

  //fetch data
  useEffect(() => {
    api.getBallotData()
      .then((res) => {
          setBallotData(res.items)
      })
  }, [])

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Ballot 
        ballotData={ballotData}
      />
    </div>
  );
}

export default App;
