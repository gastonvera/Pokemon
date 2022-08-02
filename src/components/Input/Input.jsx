import React, {useContext, useState} from "react";
import { FormularioContext } from "../../context/ContextoFormulario";



const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const {form, setForm} = useContext(FormularioContext);
  // También, utilizaremos un estado local para manejar el estado del input.
  const [pokemonField, setPokemonField] = useState("")

  const onChange = (e) => {
    setPokemonField(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    setForm({...form, [label]: pokemonField})
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
