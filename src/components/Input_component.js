import React from 'react'

const Input_component = ({name}) => {
  return (
    <div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-[100px]">
                <label class="label" for="inline-full-name">
                    Name
                </label>
            </div>
            <div class="md:w-full">
                <input class="Input" type="text" value="" />
            </div>
        </div>
    </div>
  )
}

export default Input_component

// import { useState, useRef } from 'react';
// import { Autocomplete, Loader } from '@mantine/core';

// export function Input_component() {
//   const timeoutRef = useRef(-1);
//   const [value, setValue] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   const handleChange = () => {
//     window.clearTimeout(timeoutRef.current);
//     setValue(data);
//     setData([]);

//     if (data.trim().length === 0 || data.includes('@')) {
//       setLoading(false);
//     } else {
//       setLoading(true);
//       timeoutRef.current = window.setTimeout(() => {
//         setLoading(false);
//         setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${data}@${provider}`));
//       }, 1000);
//     }
//   };
//   return (
//     <Autocomplete
//       value={value}
//       data={data}
//       onChange={handleChange}
//       rightSection={loading ? <Loader size={16} /> : null}
//       label="Async Autocomplete data"
//       placeholder="Your email"
//     />
//   );
// }