import React, { useState, useEffect } from 'react';
import './App.css';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';

function App() {
  //state vars
  const [ ballotData, setBallotData ] = useState([]);
  const [ formSelection, setSelection ] = useState({});
  
  

  //fetch data
  useEffect(() => {
    api.getBallotData()
      .then((res) => {
          setBallotData(res.items)
      })
  }, [])

  function handleSelection (category, nominee) {
    setSelection({...formSelection, [category]: nominee})
    console.log('clickclickclick', category)

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg'} className="App-logo" alt="logo" />
      </header>
      <form>
        <Ballot 
          data={ballotData}
          handleSelection={handleSelection}
        />
        <button>Submit Ballot</button>
      </form>
    </div>
  );
}

export default App;
