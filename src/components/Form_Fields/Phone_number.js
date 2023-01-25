
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Phone_number() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  return (
    <div className="mt-2">
    <label className="label mb-2">Enter phone number</label>
    <div>
    <PhoneInput
    inputStyle={{width:"385px", height:'45px', borderRadius:'10px'}}
      placeholder="Enter phone number"
      country="gh"
      value={value}
      onChange={setValue}
    />
    </div>
    </div>
  )
}

export default Phone_number