import React, { useState, useEffect } from "react";
import Slider from "react-slider";
import "./index.css";
import { useDogForm } from "./dogFormContext";
import breeds from "./dogbreeds.json";

const Thumb = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} className="react-slider-thumb">
    {formatWeight(props.state.valueNow) + " kg"}
  </div>
));

Thumb.displayName = "Thumb";

const formatWeight = (weight) => {
  let formattedWeight = parseFloat(weight.toFixed(2)).toString();
  return formattedWeight;
};

const WeightSlider = ({ goToNextStep, goToPreviousStep }) => {
  const { dogData, updateData } = useDogForm();
  const [localWeight, setLocalWeight] = useState(dogData.weight || 0);

  useEffect(() => {
    const breedData = breeds.find((breed) => breed.RACE === dogData.breed);
    if (breedData) {
      setLocalWeight(breedData["Gennmsnit (KG)"]);
    }
  }, [dogData.breed]);
  const handleSliderChange = (value) => {
    setLocalWeight(value);
  };

  const handleNextClick = () => {
    updateData({ weight: localWeight });
    goToNextStep();
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop:"10%" }}>
        <h2>
          Hvad er <span className="dog-name">{dogData.name}</span>'s vægt?
        </h2>
      </div>
      <div className="slider-container ">
        <div className="weight-label">1 kg</div>
        <Slider
          value={localWeight}
          min={1}
          max={80}
          step={0.05}
          onChange={handleSliderChange}
          renderThumb={(props, state) => <Thumb {...props} state={state} />}
        />
        <div className="weight-label">80 kg</div>
      </div>

      <div className="button-container">
        <button className="button-back" onClick={goToPreviousStep}>
          tilbage
        </button>
        <button className="button-next" onClick={handleNextClick}>
          næste
        </button>

        <img id="dog" src="src/assets/beBuggyDog.webp" alt="dog" />
        <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
      </div>
    </>
  );
};

export default WeightSlider;
