import React, { useState } from 'react';
import { useDogForm } from './dogFormContext';

function Steriliseret({goToNextStep, goToPreviousStep}) {

    const [sterilized, setSterilized] = useState(false);
    const [lastClicked, setLastClicked] = useState(null);
    const {dogData, updateData} = useDogForm();



    const handleNextStep = () => {
        updateData({ sterilized });
        goToNextStep();
        
    }

    

    return (
        <div>
        <div className='centered' >
            <h1> Er <span className="dog-name">{dogData.name} </span>Steriliseret eller kastreret?</h1>
        
            <button className={`button-yesNo ${lastClicked === 'ja' ? 'active' : ''}`} onClick={() => { setSterilized(true); setLastClicked('ja'); console.log("true")}}>Ja</button>
            <button className={`button-yesNo ${lastClicked === 'nej' ? 'active' : ''}`} onClick={() => { setSterilized(false); setLastClicked('nej'); console.log("false")}}>Nej</button>
            
          
            <div className="button-container">
            <button className="button-back" onClick={goToPreviousStep}>
                Tilbage
                </button>
                 <button className="button-next" onClick={handleNextStep}>
                     Næste
                        </button>
             </div>
             </div>

            <img id="dog-left" src="src/assets/beBuggyDog.webp" alt="dog" />
            <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
        </div>
    );
}

export default Steriliseret;