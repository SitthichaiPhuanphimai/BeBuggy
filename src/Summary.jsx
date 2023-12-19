import { useDogForm } from "./dogFormContext";
import { calculateFoodPerKilo } from "./calculate";

function Summary() {
  const { dogData, updateData } = useDogForm();

  return (
    <div>
      <h1>
        Her er <span className="dog-name">{dogData.name}s </span>foderprofil
      </h1>

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

        <p>
          Dagligt foderbehov:{" "}
          <span className="dog-name">{calculateFoodPerKilo()} g</span>{" "}
        </p>
      </div>

      <img id="emballage" src="src/assets/Mockup design (din hund).png" />
      <img id="red" src="src/assets/Red_blob.png" />

      <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />
    </div>
  );
}

export default Summary;
