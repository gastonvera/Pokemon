import React, { useContext, useState } from "react";
import { FormularioContext } from "../../context/ContextoFormulario";
import { types } from "../../reducers/PokemonReducer";

const Input = ({ name, label, type = "text" }) => {
  const { dispatch } = useContext(FormularioContext);
  const [pokemonField, setPokemonField] = useState("")

  const onChange = (e) => {
    setPokemonField(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();
    if (name === "nombreEntrenador" || name === "apellidoEntrenador" || name === "emailEntrenador") {
      dispatch({
        type: types.ACTUALIZAR_ENTRENADOR,
        key: label,
        value: pokemonField
      })
    } else {
      dispatch({
        type: types.ACTUALIZAR_POKEMON,
        key: label,
        value: pokemonField
      })
    }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={pokemonField}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
