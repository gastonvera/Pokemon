import { createContext, useReducer } from "react";
import PokemonReducer, { initialPokemonState } from "../reducers/PokemonReducer";

export const FormularioContext = createContext();

const FormularioContextProvider = ({ children }) => {
    const [form, dispatch] = useReducer(PokemonReducer, initialPokemonState)

    
    return (
        <FormularioContext.Provider value={{ form, dispatch }}>
            {children}
        </FormularioContext.Provider>
    )
}

export default FormularioContextProvider;