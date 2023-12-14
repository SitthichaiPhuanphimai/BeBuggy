import { useState } from 'react'
import './App.css'
import NameForm from './NameForm'
import DogBreedDropdown from './mydropdown'
import WeightSlider from './weightForm';
import { DogFormProvider } from './dogFormContext';

function App() {
  return (
      <DogFormProvider>
         
          <NameForm />
          <DogBreedDropdown />
          <WeightSlider />

      </DogFormProvider>
  );
}

export default App;