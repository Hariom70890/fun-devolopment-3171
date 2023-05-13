import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
   const [maleHeading, setMaleHeading] = useState(null);
   const [categoryHeading, setCategoryHeading] = useState(null);
   const headingGender = (payload) => {
      setMaleHeading(payload);
   };
   const headingCategory = (payload) => {
      setCategoryHeading(payload);
   };
   console.log(maleHeading);
   console.log(categoryHeading);
   return (
      <Context.Provider value={{ headingCategory, headingGender }}>
         {children}
      </Context.Provider>
   );
};
