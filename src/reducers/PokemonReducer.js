export const initialPokemonState = {
  Entrenador: {
    Nombre: "",
    Apellido: "",
    Email: "",
  },
  Pokemon: {
    Nombre: "",
    Tipo: "",
    Elemento: "",
    Altura: "",
    Edad: "",
  },
};

export const types = {
  ACTUALIZAR_ENTRENADOR: "ACTUALIZAR_ENTRENADOR",
  ACTUALIZAR_POKEMON: "ACTUALIZAR_POKEMON",
  BORRAR_FORM: "BORRAR_FORM",
};

/**
 * This is the function's first argument for pokemon's form state
 * @param object
 * @param object
 * @returns {object}
 */

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case types.ACTUALIZAR_ENTRENADOR:
      return {
        ...state,
        Entrenador: {
          ...state.Entrenador,
          ...action.payload,
        },
      };
    case types.ACTUALIZAR_POKEMON:
      return {
        ...state,
        Pokemon: {
          ...state.Pokemon,
          ...action.payload,
        },
      };
    case types.BORRAR_FORM:
      return {
        ...initialPokemonState,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
