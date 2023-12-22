import React, { useState, useRef } from "react";
import { useDogForm } from "./dogFormContext";

function PhotoForm({ goToNextStep, goToPreviousStep }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const { dogData } = useDogForm();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      // Implement upload to the backend right after file selection
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleNextClick = () => {
    if (file) {
      // Implement upload to the backend if a file is selected
      // uploadFile(file);
    }
    goToNextStep();
  };

  const handleSkip = () => {
    goToNextStep();
  };

  return (
    <div className="photo-form-container">
      <h1 className="dog-name">{dogData.name}</h1>
      <p>Hold snuden i sporet... Du er der næsten!</p>
      <div className="text-bubble">
        <p>
          Sidste step på rejsen er et billede af {dogData.name} til hans
          personlige foderprofil
        </p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button className="button-yesNo" onClick={handleFileInputClick}>
        Vælg fil og upload
      </button>
      {previewUrl && (
        <img src={previewUrl} alt="Preview" className="photo-preview" />
      )}
      <div className="button-container">
        <button className="button-back" onClick={goToPreviousStep}>
          Tilbage
        </button>
        <button className="button-next" onClick={handleNextClick}>
          Næste
        </button>
        <button className="button-skip" onClick={handleSkip}>
          Skip{" "}
        </button>
      </div>
      {file && <p className="file-name">File selected: {file.name}</p>}
    </div>
  );
}

export default PhotoForm;
