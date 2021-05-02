import React from 'react'

const Nominee = (props) => {
  
  return (
    <div className='nomineeContainer'>
    {props.category.items.map((nominee) => {
      var category = props.category.id;
      if (props.selectionData[category] !== undefined) {
        var isSelected = props.selectionData[category].id === nominee.id;
      }

      return <div
              id={nominee.title}
              className='nominee'
              key={nominee.title}
              style={{background: `${isSelected ? '#099BB3' : '#009B86'}`}}
              >
            <h2> {nominee.title} </h2>
            <img 
              src={nominee.photoUrL}
              alt={nominee.title}
              height='50%'
              width='50%'
              ></img>
            <div 
              id={nominee.title}
              className='selectButton'
              onClick={()=>{props.handleSelection(props.category.id, nominee)}}>
                Select {nominee.title.indexOf('for') !== -1 ? nominee.title.slice(0, nominee.title.indexOf('for') - 1) : nominee.title}
            </div>
          </div>
      })}
      </div>)}

export default Nominee