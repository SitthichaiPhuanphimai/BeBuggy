import React from "react";
import Select from "react-select";
import { useDogForm } from "./dogFormContext"; 
import dogBreeds from "./dogbreeds.json";

function DogBreedDropdown({ goToNextStep, goToPreviousStep }) {
  const {dogData, updateData } = useDogForm();
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

      <div className="centered">
        <h2> Hvad er <span className="dog-name">{dogData.name}s </span>race?</h2>
      <Select
        options={options}
        isSearchable
        styles={customStyles}
        placeholder="Select or type a breed"
        onChange={handleChange}
      />
      <div className="button-container">
      <button className="button-back" onClick={goToPreviousStep}>
          tilbage
        </button>
        <button className="button-next" onClick={handleNextStep}>
          Næste
        </button>
      </div>
      </div>


      <img id="dog" src="src/assets/beBuggyDog.webp" alt="dog" />
      <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />

  

    </div>
  );
}

export default DogBreedDropdown;
