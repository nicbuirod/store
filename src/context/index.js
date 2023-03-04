import React from "react";

export const initialContext = {
  store: {
    products: [],
  },

  redirectDetailsRouter: "",
};
export const Context = React.createContext(initialContext);
