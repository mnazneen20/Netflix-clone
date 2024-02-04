import { createContext, useContext } from "react";
const context = createContext();

const GlobalContextProvider = ({ childern }) => {
    const value = { text: 'mesage' }
    return (
        < context.Provider value={value} >
            {childern}
        </context.Provider >
    )
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(context);