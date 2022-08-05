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

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case types.ACTUALIZAR_ENTRENADOR:
      return {
        ...state,
        Entrenador: {
            ...state.Entrenador,
          [action.key]: action.value,
        },
      };
    case types.ACTUALIZAR_POKEMON:
      return {
        ...state,
        Pokemon: {
            ...state.Pokemon,
          [action.key]: action.value,
        },
      };
      case types.BORRAR_FORM:
        return {
            ...initialPokemonState
          };
    default:
      return state;
  }
};

export default PokemonReducer;
