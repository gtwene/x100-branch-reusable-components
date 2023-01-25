import React from 'react'

function RequiredLabel(props) {
  return (
    <div className='required_label'>
        {props.labelName} <span style={{color:"red"}}>*</span>
    </div>
  )
}

export default RequiredLabel;