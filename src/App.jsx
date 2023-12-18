import React, { useState } from "react";
import "./App.css";
import NameForm from "./NameForm";
import DogBreedDropdown from "./mydropdown";
import WeightSlider from "./weightForm";
import GenderForm from "./genderForm";
import { DogFormProvider } from "./dogFormContext";
import ActiveForm from "./activeForm";



function App() {
  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <DogFormProvider>
      {step === 1 && <NameForm goToNextStep={goToNextStep} />}
      {step === 2 && <DogBreedDropdown goToNextStep={goToNextStep} />}
      {step === 3 && (
        <WeightSlider
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      )}
      {step === 4 && <GenderForm
       goToNextStep={goToNextStep}
       goToPreviousStep={goToPreviousStep}
       />}
      {step === 5 && <ActiveForm 
      goToNextStep={goToNextStep}
      goToPreviousStep={goToPreviousStep} 
      />}
   
    </DogFormProvider>
  );
}

export default App;
