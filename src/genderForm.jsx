import React, { useState } from "react";
import { useDogForm } from "./dogFormContext";

function GenderForm({ goToNextStep, goToPreviousStep }) {
  const { dogData, updateData } = useDogForm();
  const [selectedGender, setSelectedGender] = useState(dogData.gender || "");

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNextClick = () => {
    updateData({ gender: selectedGender });
    goToNextStep();
  };

  return (
    <>
      <h1 id="h1">
        Er <span className="dog-name">{dogData.name}</span> en sød hanhund eller
        hunhund?
      </h1>
      <div className="gender-selection-container">
        <button
          onClick={() => handleGenderSelect("Hankøn")}
          className={selectedGender === "Hankøn" ? "selected" : ""}
        >
          ♂
        </button>
        <button
          onClick={() => handleGenderSelect("Hunkøn")}
          className={selectedGender === "Hunkøn" ? "selected" : ""}
        >
          ♀
        </button>
      </div>
      
      <div  className="button-container" >
        <button className="button-back" onClick={goToPreviousStep}>
          Tilbage
        </button>
        <button className="button-next-double" onClick={handleNextClick}>
          Næste
        </button>
      </div>
    </>
  );
}

export default GenderForm;
