// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useState } from "react";

export const FormularioContext = createContext();

const initialPokemonState = {
    Nombre: "",
    Apellido: "",
    Email: "",
    NombrePokemon: ""
}

const FormularioContextProvider = ({ children }) => {
    const [form, setForm] = useState(initialPokemonState);

    return (
        <FormularioContext.Provider value={{ form, setForm }}>
            {children}
        </FormularioContext.Provider>
    )
}

export default FormularioContextProvider;