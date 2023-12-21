import { useDogForm } from "./dogFormContext";
import { calculateFoodPerKilo } from "./calculate";

function Summary() {
  const { dogData, updateData } = useDogForm();

  return (
    <div>

    <div style={{maxWidth:"50vw", maxHeight:"auto", width: "100%"}}>
  <h1 id="summary-h1">
    {dogData.name}
    </h1>
     <h2 id="summary-h2"> Velkommen til din foderprofil</h2>
    </div>

      <div id="summary">
        <p>
          Navn: <span className="dog-name">{dogData.name} </span>{" "}
        </p>
        <p>
          Race: <span className="dog-name">{dogData.breed} </span>{" "}
        </p>
        <p>
          Vægt: <span className="dog-name">{dogData.weight}</span>{" "}
        </p>
        <p>
          Køn: <span className="dog-name">{dogData.gender}</span>
        </p>
        <p>
          Alder: <span className="dog-name">{dogData.age}</span>{" "}
        </p>
        <p>
          Steriliseret/Kastreret:{" "}
          <span className="dog-name">{dogData.sterilized ? "Ja" : "Nej"}.</span>{" "}
        </p>
        <p>
          Kropstilstand: <span className="dog-name">{dogData.condition}</span>{" "}
        </p>
        <p>
          Aktivitetsniveau:{" "}
          <span className="dog-name">{dogData.activityLevel}</span>{" "}
        </p>

      </div>

      <img id="circle" src="src/assets/beBuggyDog.webp" />


      <div>
        <img id="red" src="src/assets/Red_blob.png"/>
            <p style={{ position: 'absolute', top: '60%', left: '49%', transform: 'translate(-50%, -50%)',fontSize:"x-large" }}>
                Anbefalet
            </p>

                    <p style={{ position: 'absolute', top: '65%', left: '49%', transform: 'translate(-50%, -50%)', fontSize:"x-large" }}>
                Fodermændge:
                    </p>

                    <p style={{ position: 'absolute', top: '72%', left: '49%', transform: 'translate(-50%, -50%)',fontSize:"xx-large", color: 'var(--text-color)'}}>
                        {" "}
          <span>{calculateFoodPerKilo()} g/dag</span>{" "}
        </p>
    </div>

    
    
    
  <img id="emballage" src="src/assets/Mockup design (din hund).png" />
  

      <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />

       <button className="button-order">
          Bestil prøvepakke
        </button> 
      
    </div>
  );
}

export default Summary;