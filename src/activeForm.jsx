import React, { useState } from "react";
import { useDogForm } from "./dogFormContext";

function ActiveForm({ goToNextStep, goToPreviousStep }) {
  const { dogData, updateData } = useDogForm();
  const [selectedActive, setSelectedActive] = useState(
    dogData.activityLevel || ""
  );
  const [activeDescription, setActiveDescription] = useState("");

  const descriptions = {
    Slumretrold: "Under 30 minutters motion om dagen",
    "Lidt aktiv": "30-60 minutters motion om dagen",
    Aktiv: "1-2 timers motion om dagen",
    "Meget aktiv": "2-3 timers motion om dagen",
    Energibombe: "Over 3 timers motion om dagen",
  };

  const handleActiveSelect = (active) => {
    setSelectedActive(active);
    setActiveDescription(descriptions[active]);
  };

  const handleNextClick = () => {
    updateData({ activityLevel: selectedActive });
    goToNextStep();
  };

  return (
    <>
      <h1 id="h1">
        Hvor aktiv er <span className="dog-name">{dogData.name}</span>?
      </h1>
      <div className="active-button-container">
        {Object.keys(descriptions).map((activityLevel) => (
          <div key={activityLevel}>
            <button
              onClick={() => handleActiveSelect(activityLevel)}
              className={`button-yesNo ${
                selectedActive === activityLevel ? "selected" : ""
              }`}
            >
              {activityLevel}
            </button>
            {selectedActive === activityLevel && (
              <p className="active-description">{activeDescription}</p>
            )}
          </div>
        ))}
      </div>
      <br />

      <div className="button-container">
        <button className="button-back" onClick={goToPreviousStep}>
          Tilbage
        </button>
        <button className="button-next" onClick={handleNextClick}>
          Næste
        </button>
      </div>

      <img id="dog-left" src="src/assets/beBuggyDog.webp" alt="dog" />
      <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
    </>
  );
}

export default ActiveForm;
