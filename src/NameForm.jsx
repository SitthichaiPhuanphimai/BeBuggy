import React, { useState } from 'react';

function NameForm() {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }

    return (
        <div>

            <h1 id="h1"> BeBuggy</h1>
            <h2 id="h2"> Hvad er din hunds navn?</h2>

            <form id="nameForm" onSubmit={handleSubmit}>
                <div>
                    <div>
                    <input type="text" placeholder="Hundens navn" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                        <div><button type="submit">Næste</button></div>
                        </div>
            </form>

            <img id="dog" src="src/assets/beBuggyDog.webp" alt="dog" />
            <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
        </div>
    );
}

export default NameForm;