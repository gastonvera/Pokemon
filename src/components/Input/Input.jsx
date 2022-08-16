import React, { useContext, useState } from "react";
import { FormularioContext } from "../../context/ContextoFormulario";
import { types } from "../../reducers/PokemonReducer";
import PropTypes from 'prop-types';
import { useQuery } from "react-query";
import { getTypesPokemons } from "../../service/pokemon.service";

const Input = ({ name, label, type = "text" }) => {
  const { dispatch } = useContext(FormularioContext);
  const [pokemonField, setPokemonField] = useState("")

  const onChange = (e) => {
    setPokemonField(e.target.value)
  };

  const { isLoading, error, data } = useQuery("typesPokemons", getTypesPokemons);


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
    type === "select" ?
      <div className="input-contenedor">
        <label htmlFor={name}>{label}</label>
        <select value={pokemonField} onChange={onChange} onBlur={onBlur} id={name}>
          {data?.results.map((type, index) => {
            return <option key={index} value={type.name}>{type.name}</option>
          })}
        </select>
      </div>
      :
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
