import React from 'react';
import CurrencyInput from 'react-currency-input-field';

const Amount_field = () => {
  return (
    <div className='mt-2'>
        <div>
            <label className='label mb-2'>
                Amount Field
            </label>
        </div>
        <div className=''>
            <CurrencyInput
            className='Input'
                prefix = "GHS "
                id="input-example"
                name="input-name"
                placeholder="Please enter a number"
                decimalsLimit={2}
                onValueChange={(value, name) => console.log(value, name)}
            />
        </div>
    </div>
  )
}

export default Amount_field
