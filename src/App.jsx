import React, { useState } from "react";
import "./App.css";
import NameForm from "./NameForm";
import DogBreedDropdown from "./mydropdown";
import WeightSlider from "./weightForm";
import GenderForm from "./genderForm";
import Steriliseret from "./steriliseret";
import ageForm from "./AgeForm";
import { DogFormProvider } from "./dogFormContext";
import AgeForm from "./AgeForm";
import Kropstilstand from "./Kropstilstand";
import Summary from "./Summary";

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
      {step === 4 && <GenderForm goToNextStep={goToNextStep} />}
      {step === 5 && <Steriliseret goToNextStep={goToNextStep} />}
      {step === 6 && <AgeForm goToNextStep={goToNextStep} />}
      {step === 7 && <Kropstilstand goToNextStep={goToNextStep} />}
      {step === 8 && <Summary goToNextStep={goToNextStep} />}

      
      
    </DogFormProvider>
  
  );
}

export default App;
