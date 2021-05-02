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
        <form>
          <button
          type='submit'
          onSubmit={()=>{props.handleClose()}}
          >Close</button> 
        </form>
          
        </div>
      </div>
    </div>
  )
}

export default Modal