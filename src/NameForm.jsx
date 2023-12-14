import React, { useState } from 'react';
import { useDogForm } from './dogFormContext'; // Adjust the import path as necessary

function NameForm() {
    const [name, setName] = useState('');
    const { updateData } = useDogForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateData({ name }); // Updates the context with the new name
        // Here you might navigate to the next form step or handle the name submission
    }

    return (
        <div>
            <h1 id="h1"> BeBuggy</h1>
            <h2 id="h2"> Hvad er din hunds navn?</h2>

            <form id="nameForm" onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Hundens navn" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
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
