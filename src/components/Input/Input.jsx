import React, { useContext, useState } from "react";
import { FormularioContext } from "../../context/ContextoFormulario";
import { types } from "../../reducers/PokemonReducer";
import PropTypes from 'prop-types';

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
        payload: {
          [label]: pokemonField
        }
      })
    } else {
      dispatch({
        type: types.ACTUALIZAR_POKEMON,
        payload: {
          [label]: pokemonField
        }
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

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Input;
