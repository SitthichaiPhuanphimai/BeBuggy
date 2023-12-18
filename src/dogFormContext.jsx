import React, { createContext, useState, useContext } from "react";

const DogFormContext = createContext();

export const useDogForm = () => useContext(DogFormContext);

export const DogFormProvider = ({ children }) => {
  const [dogData, setDogData] = useState({
    name: "",
    breed: "",
    weight: null,
    gender: ""
  });

  const updateData = (newData) => {
    setDogData({ ...dogData, ...newData });
  };

  return (
    <DogFormContext.Provider value={{ dogData, updateData }}>
      {children}
    </DogFormContext.Provider>
  );
};
