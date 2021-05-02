import React from 'react';

const Modal = (props) => {
  return (
    <div className='outer'>
      <div className='view'>
        <div className='modal-header'>You've selected:</div>
        {Object.entries(props.ballotSubmissions).map((nominee)=> {
          return <div className='modal-entry'>
                   {`${nominee[0].replace(/-/g, ' ')}: ${nominee[1].title}`}
            </div>
        })}
        <div className='modal-footer'> 
          <button
          type='button'
          onClick={()=>{props.handleClose()}}
          >Close</button> 
        </div>
      </div>
    </div>
  )
}

export default Modal