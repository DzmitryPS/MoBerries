import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = (props) => {
  
  const [month, setMonth] = useState(12);
  const [gb, setGb] = useState(5);
  const [upPay, setUpPay] = useState(false)
 
  return (
    <MyContext.Provider value={{month, setMonth, gb, setGb, upPay, setUpPay}}>
      {props.children}
    </MyContext.Provider>
  );
};