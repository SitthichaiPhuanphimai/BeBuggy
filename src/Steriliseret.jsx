import React, { useState } from "react";
import { useDogForm } from "./dogFormContext";

function Steriliseret({ goToNextStep, goToPreviousStep }) {
  const [sterilized, setSterilized] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);
  const { dogData, updateData } = useDogForm();

  const handleNextStep = () => {
    updateData({ sterilized });
    goToNextStep();
  };

  return (
    <>

        <h1 id="h1">
          {" "}
          Er <span className="dog-name">{dogData.name} </span>Steriliseret eller
          kastreret?
        </h1> 
    
      <div className="button-container">
      


        <button
          className={`button-yesNo ${lastClicked === "Ja" ? "active" : ""}`}
          onClick={() => {
            setSterilized("Ja");
            setLastClicked("Ja");
            console.log("true");
          }}
        >
          Ja
        </button>
        <button
          className={`button-yesNo ${lastClicked === "Nej" ? "active" : ""}`}
          onClick={() => {
            setSterilized("Nej");
            setLastClicked("Nej");
            console.log("false");
          }}
        >
          Nej
        </button>
        </div>

        <div className="button-container" style={{marginTop:"5%"}}>
        <button className="button-back" onClick={goToPreviousStep}>
          Tilbage
        </button>
        <button className="button-next-double" onClick={handleNextStep}>
          Næste
        </button>
      </div>

      <img id="dog-left" src="src/assets/beBuggyDog.webp" alt="dog" />
      <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
    
    </>
  );
}

export default Steriliseret;