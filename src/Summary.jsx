import { useDogForm } from "./dogFormContext";
import { calculateFoodPerKilo } from "./calculate";

function Summary({goToPreviousStep}) {

    const {dogData, updateData} = useDogForm();
    
    
    return ( 



        <div>

            <h1>Her er <span className="dog-name">{dogData.name}s </span>foderprofil</h1>

            <div id="summary">
                <p>Navn:  <span className="dog-name">{dogData.name} </span> </p> 
                <p>Race:  <span className="dog-name">{dogData.breed} </span> </p>
                <p>Vægt:  <span className="dog-name">{dogData.weight}</span> </p>
                <p>Køn: <span className="dog-name">{dogData.gender}</span></p>
                <p>Alder:  <span className="dog-name">{dogData.age}</span> </p>
                <p>Steriliseret/Kastreret:  <span className="dog-name">{dogData.sterilized ? 'Ja' : 'Nej'}</span></p>
                <p>Kropstilstand:  <span className="dog-name">{dogData.condition}</span> </p>
                <p>Aktivitetsniveau:  <span className="dog-name">{dogData.active}</span> </p>


                <p>Dagligt foderbehov:  <span className="dog-name">{calculateFoodPerKilo()} g</span> </p>
                

            

                
        
            </div>

              
              
            <img id="emballage" src="src/assets/Mockup design (din hund).png"  />
            
            
                
                

            <div>
            <img id="red" src="src/assets/Red_blob.png" alt="Red Blob" />
            <p id="" style={{
                position: 'absolute',
                top: '56%',
                left: '49%',
                transform: 'translate(-50%, -50%)',
                color: 'white', 
                fontSize: "x-large"
                
                
                 }}>
              Anbefalet
              </p>

              <p id="" style={{
                position: 'absolute',
                top: '60%',
                left: '49%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: "x-large"
                
                 }}>
              fodermængde:
              </p>
                </div>
           

            <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />

            <button style={{position:"absolute", left:"5%",bottom:"5px"}} className="button-back" onClick={goToPreviousStep}>
                Tilbage
                </button>
            

        </div>


     );
}

export default Summary;