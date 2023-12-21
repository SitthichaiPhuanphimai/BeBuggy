import React, { useState } from "react";
import { useDogForm } from "./dogFormContext";

function BodyCondition({ goToNextStep,goToPreviousStep }) {
  const [condition, setCondition] = useState(null);
  const { dogData, updateData } = useDogForm();
  const [lastClicked, setLastClicked] = useState(null);

  const handleNextStep = () => {
    updateData({ condition });
    goToNextStep();
  };

  return (
    
    <div>
      <div className="centered button-container" >
        <h2>
          {" "}
          Hvad er <span className="dog-name">{dogData.name}s </span>
          kroptilstand?{" "}
        </h2>

        <div className="button-container">
          <button
            className={`button-yesNo ${
              lastClicked === "Undervægtig" ? "active" : ""
            }`}
            onClick={() => {
              setCondition("Undervægtig");
              setLastClicked("Undervægtig");
            }}
          >
            Undervægtig
          </button>
          <button
            className={`button-yesNo ${
              lastClicked === "Normal" ? "active" : ""
            }`}
            onClick={() => {
              setCondition("Normal");
              setLastClicked("Normal");
            }}
          >
            Normal
          </button>
          <button
            className={`button-yesNo ${
              lastClicked === "Overvægtig" ? "active" : ""
            }`}
            onClick={() => {
              setCondition("Overvægtig");
              setLastClicked("Overvægtig");
            }}
          >
            Overvægtig
          </button>
        </div><br />

        <div className="button-container" >
        <button className="button-back" onClick={goToPreviousStep}>
          Tilbage
        </button>
        <button className="button-next-double" onClick={handleNextStep}>
          Næste
        </button>
      </div>

      </div>

      <img id="dog" src="src/assets/beBuggyDog.webp" alt="dog" />
      <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
    </div>
  );
}

export default BodyCondition;