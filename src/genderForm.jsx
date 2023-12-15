import "./index.css";
import { DogFormProvider, useDogForm } from "./dogFormContext";
import { useState } from "react";

function GenderForm() {
    const [gender, setGender] = useState(null); // Add this line
    const { dogData, updateData } = useDogForm();

    const handleNextClick = () => {
        updateData({ gender: gender });
        goToNextStep();
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }


    return (
        <>
            <h2>
                Er <span className="dog-name">{dogData.name} </span>en han eller hun?
            </h2>
        </>
    )
}

export default GenderForm;