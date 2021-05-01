import React, { useState, useEffect } from 'react';
import './App.css';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';

function App() {
  //fetch data
  const [ ballotData, setBallotData ] = useState([]);
  useEffect(() => {
    api.getBallotData()
      .then((res) => {
        console.log('then res',res.items)
          setBallotData(res.items)
      })
  }, [])
  console.log('outerdata', ballotData, )
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
