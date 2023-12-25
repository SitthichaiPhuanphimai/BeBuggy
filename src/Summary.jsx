import React from 'react';
import { useDogForm } from "./dogFormContext";
import { calculateFoodPerKilo } from "./calculate";

function Summary() {
  const { dogData } = useDogForm();

  return (
    <div className="summary-container">

      <div className="profile-header">
        <h1 id="summary-h1">{dogData.name}</h1>
        <h2 id="summary-h2">Velkommen til din foderprofil</h2>
      </div>

      <div id="summary">
        {/* Dog information details */}
        <p>Navn: <span className="dog-name">{dogData.name}</span></p>
        <p>Race: <span className="dog-name">{dogData.breed}</span></p>
        <p>Vægt: <span className="dog-name">{dogData.weight}</span></p>
        <p>Køn: <span className="dog-name">{dogData.gender}</span></p>
        <p>Alder: <span className="dog-name">{dogData.age}</span></p>
        <p>Steriliseret: <span className="dog-name">{dogData.sterilized}</span></p>
        <p>Kropstilstand: <span className="dog-name">{dogData.condition}</span></p>
        <p>Aktivitetsniveau: <span className="dog-name">{dogData.activityLevel}</span></p>

        {/* ... other details ... */}
      </div>

      <img id="circle" src="src/assets/beBuggyDog.webp" alt="dog" />

      <div className="recommendation-container">
  <img id="red" src="src/assets/Red_blob.png" alt="Red Blob"/>
  <div className="recommendation-text">
    <p>Anbefalet</p>
    <p>Fodermændge:</p>
    <p><span>{calculateFoodPerKilo()} g/dag</span></p>
  </div>
</div>

      <img id="emballage" src="src/assets/Mockup design (din hund).png" alt="dog food package" />
      <img id="logo" src="src/assets/BeBuggy_logo.png" alt="Be Buggy logo" />

      <button className="button-order">Bestil prøvepakke</button>

    </div>
  );
}

export default Summary;
