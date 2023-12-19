import React, { useState } from "react";
import "./App.css";
import NameForm from "./NameForm";
import DogBreedDropdown from "./mydropdown";
import WeightSlider from "./weightForm";
import GenderForm from "./genderForm";
import Steriliseret from "./steriliseret";
import { DogFormProvider } from "./dogFormContext";
import AgeForm from "./AgeForm";
import BodyCondition from "./bodycondition";
import Summary from "./Summary";
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
      {step === 2 && <DogBreedDropdown goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {step === 3 && (
        <WeightSlider
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      )}
      {step === 4 && <GenderForm goToNextStep={goToNextStep} />}
      {step === 5 && <Steriliseret goToNextStep={goToNextStep} />}
      {step === 6 && <AgeForm goToNextStep={goToNextStep} />}
      {step === 7 && <BodyCondition goToNextStep={goToNextStep} />}
      {step === 8 && <ActiveForm goToNextStep={goToNextStep} />}
      {step === 9 && <Summary goToNextStep={goToNextStep} />}

      
      
    </DogFormProvider>
  
  );
}

export default App;
