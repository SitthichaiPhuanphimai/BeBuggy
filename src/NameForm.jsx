function NameForm() {
    
    return (
        <div>
            <h1> BeBuggy</h1>
            <p> Hvad er din hunds navn?</p>
            <form id="nameForm">
                <input type="text" placeholder="Navn" />
                <button type="submit">Næste</button>
            </form>
            <img id="dog" src="src/assets/beBuggyDog.webp" alt="dog" />
            <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
        </div>
    );
}

export default NameForm;