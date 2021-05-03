import React from 'react';
import Nominee from './Nominee';

const Ballot = (props) => {
  return (
    <div className='ballot'>
      {props.data.map((category) => {
        return<div className='category'
                   key={category.title}>
              <h2 className='catHeader'>{category.id.replace(/-/g, ' ')}</h2>
              <Nominee
                selectionData={props.selectionData}
                handleSelection={props.handleSelection}
                category={category}/>
              </div>
      })}</div>
    )
}

export default Ballot;