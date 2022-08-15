import { createContext, useReducer } from "react";
import PokemonReducer, { initialPokemonState } from "../reducers/PokemonReducer";
import PropTypes from "prop-types";

export const FormularioContext = createContext();

/**
 * 
 * @param {*} param0 
 * @returns {Component}
 */
const FormularioContextProvider = ({ children }) => {
    const [form, dispatch] = useReducer(PokemonReducer, initialPokemonState);

    
    return (
        <FormularioContext.Provider value={{ form, dispatch }}>
            {children}
        </FormularioContext.Provider>
    )
}

FormularioContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default FormularioContextProvider;