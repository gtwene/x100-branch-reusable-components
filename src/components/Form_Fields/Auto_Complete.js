

import React, { useState } from 'react'
import { Hint } from 'react-autocomplete-hint';

const options = [
    {id: 1, label: "orange"}, 
    {id: '2', label: "banana"}, 
    {id: 3, label: "apple"},
    {id: 1, label: "branch"}, 
    {id: '2', label: "x100"}, 
    {id: 3, label: "union"},
    {id: 1, label: "global"}, 
    {id: '2', label: "system"}, 
    {id: 3, label: "man"},
];

const Auto_Complete = () => {
    const [text, setText] = useState()
  return (
    <div>
        <div>
            <label className='label'>
                Auto Complete
            </label>
        </div>
        <Hint options={options}>
        <input
            className='Input'
            value={text}
            onChange={e => setText(e.target.value)} 
            />
        </Hint>
    </div>
  )
}

export default Auto_Complete





