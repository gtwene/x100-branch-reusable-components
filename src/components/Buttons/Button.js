import React from 'react'

const Button = () => {
  return (
    <div>
       <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3 mb-3">
                <button className="button">
                    Submit
                </button>
            </div>
        </div> 
    </div>
  )
}

export default Button
