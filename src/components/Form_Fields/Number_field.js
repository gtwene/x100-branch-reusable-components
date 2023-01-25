import {useState} from 'react';

const Number_field = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  console.log(value);
  console.log(typeof value);
  console.log(Number(value));

  return (
    <div>
      <div>I accept only Number Value</div>
      <input
        className='Input'
        type="text"
        placeholder="Your fav number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Number_field;
