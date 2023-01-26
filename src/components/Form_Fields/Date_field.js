import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";


const Date_field = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
        
    
    return (
        <div>
            <div className="-mt-5 mt-2">
                <label className="label mb-2">
                    Date
                </label>
            </div>
        <div className="border-2 rounded-lg">
               <Datepicker 
               primaryColor={"fuchsia"}
               value={value} 
               showFooter={true} 
               onChange={handleValueChange} 
               showShortcuts={true} 
               useRange={false}
               /> 
            
        </div>
        </div>
    );
};

export default Date_field;