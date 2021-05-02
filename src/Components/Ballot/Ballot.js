import React from 'react';
import Nominee from './Nominee';

const Ballot = (props) => {
  return (
    <div className='ballot'>
      {props.data.map((category) => {
        return<div className='category'>
              <h2 className='catHeader'>{category.id.replace(/-/g, ' ')}</h2>
              <Nominee
                handleSelection={props.handleSelection}
                category={category}/>
              </div>
      })}</div>
    )
}

export default Ballot;