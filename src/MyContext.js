import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = (props) => {
  const [month, setMonth] = useState(12);
  const [gb, setGb] = useState(5);
  const [upPay, setUpPay] = useState(false);

  const [pricesPlan, setPricesPlan] = useState("");
  const [price, currentPrice] = useState(1);

  const [CVC, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [checked, setChecked] = useState(false)

  return (
    <MyContext.Provider
      value={{
        checked,
        setChecked,
        price,
        currentPrice,
        pricesPlan,
        setPricesPlan,
        month,
        setMonth,
        gb,
        setGb,
        upPay,
        setUpPay,
        CVC,
        setCVC,
        expiry,
        setExpiry,
        name,
        setName,
        number,
        setNumber,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
