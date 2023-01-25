import React from 'react'
import Button from "../Buttons/Button"
import Input_component from '../Input_component'
import Amount_field from './Amount_field'
import Auto_Complete from './Auto_Complete'
import Date_field from './Date_field'
import Email from './Email'
import Label from './Label'
import Phone_number from './Phone_number'
import Upload_DragnDrop from './Upload_DragnDrop'


const Input = () => {
  return (
    <div>
        <div className='flex justify-center my-5'>
            <form class="w-full max-w-sm ">
                <Label />
                <Email name="Name" />
                <Input_component />
                <Auto_Complete />
                <Email />
                <Date_field />
                <Amount_field />
                <Phone_number />
                {/* <Upload_DragnDrop /> */}
                <Button />
            </form>
        </div>

    </div>
  )
}

export default Input
