import React, { createContext, useState, useContext } from "react";

const DogFormContext = createContext();

export const useDogForm = () => useContext(DogFormContext);

export const DogFormProvider = ({ children }) => {
  const [dogData, setDogData] = useState({
    name: "",
    breed: "",
    weight: 0,
    age: 0,
    sterilized: "",
    condition: "",
    gender: "",
    activityLevel: "",
  });

  const updateData = (newData) => {
    setDogData((prevDogData) => ({ ...prevDogData, ...newData }));
  };

  return (
    <DogFormContext.Provider value={{ dogData, updateData }}>
      {children}
    </DogFormContext.Provider>
  );
};
