import React, { useState, useEffect } from 'react';
import './App.css';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';
import Modal from './Components/Modal'

function App() {
  //state vars
  const [ ballotData, setBallotData ] = useState([]);
  const [ formSelection, setSelection ] = useState({});
  const [ submission, setSubmission ] = useState(false);
  

  //fetch data
  useEffect(() => {
    api.getBallotData()
      .then((res) => {
          setBallotData(res.items)
      })
  }, [])

  //handle nominee selection
  function handleSelection(category, nominee) {
    setSelection({...formSelection, [category]: nominee})
    
  }

  //handle ballot submission -> confirmation and modal open
  function handleSubmission () {
    if (Object.keys(formSelection).length === ballotData.length) {
      setSubmission(true)
    }
    else {
      window.alert('Please select from each category')
    }
  }
  
  //close modal and reset page
  function handleClose () {
    setSubmission(false);
    setSelection({})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg'} className="App-logo" alt="logo" />
        <h2>Movie Awards 2021</h2>
      </header>    
        {submission ?
        <Modal
          ballotSubmissions={formSelection}
          handleClose={handleClose}
        /> :
        null}
      <div>
        <Ballot 
          data={ballotData}
          selectionData={formSelection}
          handleSelection={handleSelection}
        />
        <button 
          className='submitButton'
          type='button'
          onClick={handleSubmission}
            >Submit Ballot</button>
      </div>
      
    </div>
  );
}

export default App;
