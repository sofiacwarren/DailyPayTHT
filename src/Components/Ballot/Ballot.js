import React from 'react';

const Ballot = (props) => {
  console.log('from ballot', props.ballotData)
  return (
    <div className='ballot'>
      {props.ballotData.map((category) => {
        return <div>
          <h1>{category.id}</h1>
          {category.items.map((nominee) => {
          return <div>
            <img src={nominee.photoUrL}></img>
            {nominee.title}
            <button>Select {category.id}</button>
          </div>
        })}</div>
      })}
    </div>
  )
}

export default Ballot;