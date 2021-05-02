import React, { useState, useEffect } from 'react';
import './App.css';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';
import Modal from './Components/Modal'

function App() {
  //state vars
  const [ ballotData, setBallotData ] = useState([]);
  const [ formSelection, setSelection ] = useState({});
  const [ submission, setSubmission ] = useState(false); //modal on
  

  //fetch data
  useEffect(() => {
    api.getBallotData()
      .then((res) => {
          setBallotData(res.items)
      })
  }, [])
  //handle nominee selection
  function handleSelection (category, nominee) {
    setSelection({...formSelection, [category]: nominee})
    // document.getElementById(nominee.title) ? document.getElementById(nominee.title).style.backgroundColor = "#099BB3" :
  }

  function handleSubmission () {
    console.log('submitted')
    if (Object.keys(formSelection).length === ballotData.length) {
      setSubmission(true)
    }
    else {
      window.alert('Please select from each category')
    }
  }
  
  function handleClose () {
    setSubmission(false);
    // setSelection({});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg'} className="App-logo" alt="logo" />
      </header>    
        {submission ?
        <Modal
          ballotSubmissions={formSelection}
          handleClose={handleClose}
        /> :
        null}
        
      <form>
        <Ballot 
          data={ballotData}
          handleSelection={handleSelection}
        />
        <button 
          className='submitButton'
          type='button'
          onClick={handleSubmission}
            >Submit Ballot</button>
      </form>
      
    </div>
  );
}

export default App;
