import React, { useState } from "react";
import Slider from "react-slider";
import "./index.css";
import { useDogForm } from "./dogFormContext";
import breeds from './dogbreeds.json';

const Thumb = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} className="react-slider-thumb">
    {[props.state.valueNow, "kg"]}
  </div>
));

Thumb.displayName = "Thumb";

const WeightSlider = () => {
    const { dogData, updateData } = useDogForm();
    const [weight, setWeight] = useState(10);
  
    const handleSliderChange = (value) => {
      setWeight(value);
    };

  return (
    <>
         <h2>Hvad er {dogData.name}'s vægt?</h2>
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
      <button className="button-back">tilbage</button>
      <button className="button-next-double" onClick={() => console.log(weight)}>næste</button>
      
    </div>
    </>
  );
};

export default WeightSlider;
