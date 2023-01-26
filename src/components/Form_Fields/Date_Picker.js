import { DatePicker } from '@mantine/dates';

function Date_Picker({label, placeholder}) {
  return (
    <DatePicker 
      placeholder={placeholder} 
      label={label} 
      inputFormat="DD/MM/YYYY" 
      labelFormat="DD/MM/YYYY" 
      defaultValue={new Date()} 
    /> 
  );
}

export default Date_Picker;