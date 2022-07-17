import { createContext, useState } from "react";


export const GlobalContext = createContext();


export const GlobalContextProvider = (props) => {
  const [latAndLon, setLatAndLon] = useState([0.000000, 0.000000]);


  return(
    <GlobalContext.Provider value={ {latAndLon, setLatAndLon} }>
      {props.children}
    </GlobalContext.Provider>
 )
}