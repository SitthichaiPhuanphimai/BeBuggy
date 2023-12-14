import React from "react";
import Select from "react-select";
import { useDogForm } from "./dogFormContext"; 
import dogBreeds from "./dogbreeds.json";

function DogBreedDropdown({ goToNextStep }) {
  const { updateData } = useDogForm();
  const options = dogBreeds.map((breed) => ({
    label: breed.RACE,
    value: breed.RACE,
  }));

  const customStyles = {
    control: (styles) => ({ ...styles, fontFamily: "'Chelsea Market', cursive", width: 300 }),
    option: (styles) => ({ ...styles, fontFamily: "'Chelsea Market', cursive", color: 'black' }),
    singleValue: (styles) => ({ ...styles, fontFamily: "'Chelsea Market', cursive", color: 'black' }),
   
};

  const handleChange = (selectedOption) => {
    updateData({ breed: selectedOption.value });
    
  };

  const handleNextStep = () => {
    goToNextStep(); 
  };

  return (
    <div>
      <Select
        options={options}
        isSearchable
        styles={customStyles}
        placeholder="Select or type a breed"
        onChange={handleChange}
      />
      <div className="button-container">
        <button className="button-next" onClick={handleNextStep}>
          Næste
        </button>
      </div>
    </div>
  );
}

export default DogBreedDropdown;
