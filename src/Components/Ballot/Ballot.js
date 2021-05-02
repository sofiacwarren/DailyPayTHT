import React from 'react';

const Ballot = (props) => {
  console.log('from ballot', props.data)
  return (
    <div className='ballot'>

      {props.data.map((category) => {
        return <div className='category'>
          <h2 className='catHeader'>{category.id}</h2>
          <div className='nomineeContainer'>
            {category.items.map((nominee) => {
              return <div
              className='nominee'
              key={nominee.title}
              >
            <h2> {nominee.title} </h2>
            <img 
              src={nominee.photoUrL}
              alt={nominee.title}
              height='50%'
              width='50%'
              ></img>
            <div 
              className='selectButton'
              onClick={()=>{props.handleSelection(category.id, nominee)}}>
                Select {nominee.title.indexOf('for') ? nominee.title.slice(0, nominee.title.indexOf('for') - 1) : nominee.title}
            </div>
          </div>
        })}</div>
        </div>
    })}</div>
    )
}

export default Ballot;