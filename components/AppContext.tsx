import React, { createContext } from "react";

interface AppParamters {
  selectedPageP: any;
  isAboveMediumScreenP: any;

  setSelectedPageP: (value: any) => void;
}
const AppContext = createContext<any | null>(null);

export default AppContext;
