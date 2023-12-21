import React, { useState } from 'react';
import { useDogForm } from './dogFormContext'; 

function NameForm({ goToNextStep }) {
    const [name, setName] = useState('');
    const { updateData } = useDogForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateData({ name });
        goToNextStep(); 
    }

    return (
        <div style={{marginTop:"10%"}}>
            
            <h1 id="h1"> Hvad er din hunds navn?</h1>

            <form id="nameForm" onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Hundens navn" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        style={{width: "700px", height: "50px"}}
                    />
                    <button className='button-next' type="submit">Næste</button>
                </div>
            </form>

            <img id="dog" src="src/assets/beBuggyDog.webp" alt="dog" />
            <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
        </div>
    );
}

export default NameForm;
