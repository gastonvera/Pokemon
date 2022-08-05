import React, { useContext } from "react";
import { FormularioContext } from "../../context/ContextoFormulario";

const Detalle = () => {

  const {form} = useContext(FormularioContext);

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {form.Entrenador.Nombre}</p>
          <p>Apellido: {form.Entrenador.Apellido}</p>
          <p>Email: {form.Entrenador.Email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {form.Pokemon.Nombre}</p>
          <p>Tipo: {form.Pokemon.Tipo}</p>
          <p>Elemento: {form.Pokemon.Elemento}</p>
          <p>Altura: {form.Pokemon.Altura}</p>
          <p>Edad: {form.Pokemon.Edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
