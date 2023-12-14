// Assuming this is in DogBreedDropdown.jsx or a similar file
import React from 'react';
import Select from 'react-select';
import dogBreeds from './dogbreeds.json'; // Adjust the path as necessary

function DogBreedDropdown() {
    const options = dogBreeds.map(breed => ({ label: breed.RACE, value: breed.RACE }));

    const customStyles = {
        control: (styles) => ({ ...styles, fontFamily: "'Chelsea Market', cursive", width: 300 }),
        option: (styles) => ({ ...styles, fontFamily: "'Chelsea Market', cursive", color: 'black' }),
        singleValue: (styles) => ({ ...styles, fontFamily: "'Chelsea Market', cursive", color: 'black' }),
        // Apply this font style to other parts as needed
    };

    return (
        <Select 
            options={options} 
            isSearchable 
            styles={customStyles}
            placeholder="Select or type a breed"
        />
    );
}

export default DogBreedDropdown;
