import React, { useState } from "react";
import Slider from "react-slider";
import "./index.css";
import { useDogForm } from "./dogFormContext";

const Thumb = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} className="react-slider-thumb">
    {[props.state.valueNow, "kg"]}
  </div>
));

Thumb.displayName = "Thumb";

const WeightSlider = ({ goToNextStep, goToPreviousStep }) => {
  const { dogData, updateData } = useDogForm();
  const [weight, setWeight] = useState(10);

  const handleSliderChange = (value) => {
    setWeight(value);
  };

  return (
    <>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Hvad er <span className="dog-name">{dogData.name}</span>'s vægt?</h2>
      </div>
      <div className="slider-container">
        <Slider
          defaultValue={10}
          min={0}
          max={50}
          onChange={handleSliderChange}
          renderThumb={(props, state) => <Thumb {...props} state={state} />}
        />
      </div>

      <div className="button-container">
        <button className="button-back" onClick={goToPreviousStep}>
          tilbage
        </button>
        <button
          className="button-next-double"
          onClick={() => {
            updateData({ weight });
            goToNextStep();
          }}
        >
          næste
        </button>
      </div>
    </>
  );
};

export default WeightSlider;
