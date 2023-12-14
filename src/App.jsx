import { useState } from 'react'
import './App.css'
import NameForm from './NameForm'
import DogBreedDropdown from './mydropdown'
import WeightSlider from './weight';

function App() {
  

  return (
    
    <div>
    <NameForm />

      
    <DogBreedDropdown />

    <WeightSlider />

      </div>
  )
}

export default App
