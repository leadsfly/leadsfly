import React, { createContext } from "react";

interface AppParamters {
  selectedPageP: any;
  isAboveMediumScreenP: any;

  setSelectedPageP: (value: any) => void;
}
const AppContext = createContext<AppParamters | null>(null);

export default AppContext;
