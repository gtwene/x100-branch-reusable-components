import React from 'react'

const Email = ({name}) => {
  return (
    <div>
      <div class="mb-6 mt-2">
        <label className="label mb-2">Email</label>
            <input type="text" id="email" autoComplete='off' className="Input" />
        </div> 
    </div>
  )
}

export default Email
