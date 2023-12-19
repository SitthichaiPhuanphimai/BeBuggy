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
      <h2>
        Er <span className="dog-name">{dogData.name}</span> en sød hanhund eller
        hunhund?
      </h2>
      <div className="gender-selection-container">
        <button
          onClick={() => handleGenderSelect("male")}
          className={selectedGender === "male" ? "selected" : ""}
        >
          ♂
        </button>
        <button
          onClick={() => handleGenderSelect("female")}
          className={selectedGender === "female" ? "selected" : ""}
        >
          ♀
        </button>
      </div>
      <div className="button-container">
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
