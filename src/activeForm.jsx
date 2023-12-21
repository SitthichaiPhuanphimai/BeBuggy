import React, { useState } from "react";
import { useDogForm } from "./dogFormContext";

function ActiveForm({ goToNextStep, goToPreviousStep }) {
  const { dogData, updateData } = useDogForm();
  const [selectedActive, setSelectedActive] = useState(dogData.active || "");

  const handleActiveSelect = (active) => {
    setSelectedActive(active);
  };

  const handleNextClick = () => {
    updateData({  activityLevel: selectedActive });
    goToNextStep();
  };

  return (
    <>
      <h2>
        Hvor aktiv er <span className="dog-name">{dogData.name}</span> ?
      </h2>
      <div className="active-selection-container">
        <button
          onClick={() => handleActiveSelect("slumretrold")}
          className={selectedActive === "slumretrold" ? "selected" : ""}
        >
          Slumretrold
        </button>
        <button
          onClick={() => handleActiveSelect("lidt aktiv")}
          className={selectedActive === "lidt aktiv" ? "selected" : ""}
        >
          Lidt aktiv
        </button>
        <button
          onClick={() => handleActiveSelect("aktiv")}
          className={selectedActive === "aktiv" ? "selected" : ""}
        >
          Aktiv
        </button>
        <button
          onClick={() => handleActiveSelect("meget aktiv")}
          className={selectedActive === "meget aktiv" ? "selected" : ""}
        >
          Meget aktiv
        </button>
        <button
          onClick={() => handleActiveSelect("energibombe")}
          className={selectedActive === "energibombe" ? "selected" : ""}
        >
          Energibombe
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

export default ActiveForm;
