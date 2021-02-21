import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [ cart, serCart ] = useState([{ id:1 , name: "algo"}]);

    return <GlobalContext.Provider value={cart}>
        {children}
    </GlobalContext.Provider>
}