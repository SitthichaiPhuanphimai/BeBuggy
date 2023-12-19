import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDogForm } from './dogFormContext';

function AgeForm({ goToNextStep,goToPreviousStep }) {


    const [age, setAge] = useState(null);
    const [lastClicked, setLastClicked] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { dogData, updateData } = useDogForm();

    const handleNextStep = () => {
        updateData({ age });
        goToNextStep();
    }

    return ( 

        
        <div>
        <div className='centered'>

            <h1>Hvor gammel er  <span className="dog-name">{dogData.name} </span>?</h1>

            <button className={`button-yesNo ${lastClicked === 'hvalp' ? 'active' : ''}`} onClick={() => { setLastClicked('hvalp'); setModalIsOpen(true); }}>Hvalp</button>
            <button className={`button-yesNo ${lastClicked === 'voksen' ? 'active' : ''}`}  onClick={() => {  setLastClicked('voksen'); setAge('voksen')}}> Voksen</button>
            <button className={`button-yesNo ${lastClicked === 'senior' ? 'active' : ''}`} onClick={() => { setLastClicked('senior'); setModalIsOpen(true); }}>Senior</button>

            


            <div className="button-container">
            <button className="button-back" onClick={goToPreviousStep}>
                Tilbage
                </button>
                 <button className="button-next" onClick={handleNextStep}>
                     Næste
                        </button>
             </div>

             </div>
            <img id="dog-top-left" src="src/assets/beBuggyDog.webp" alt="dog" />
            <img id="logo" src="src/assets/BeBuggy_logo.png" alt="logo" />

    <Modal 
  isOpen={modalIsOpen} 
  onRequestClose={() => setModalIsOpen(false)}
  style={{
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#226f54',
      color: '#fff' 
    }
  }}
>
  <h2 className='modal'>Vuff Vuff!</h2>
  <p className='modal'>Vi har desværre ikke foder til Hvalpe og Senior endnu!</p>
  <p> Du kan skrive dig op med din email, så kontakter vi dig når vi har foder på lager til hvalpe og Senior hunde</p>
  
  <form>
    <label>
      Email: 
      <input type="text" name="email" />
    </label>
    <input type="submit" value="Send" />
  </form>

  <button onClick={() => setModalIsOpen(false)}>Ok!</button>
</Modal>

 </div>

            

     );
}

export default AgeForm;