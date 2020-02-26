
const defaultSate = {
  pag: 0,
  nexpag: "https://pokeapi.co/api/v2/pokemon",
  prepag: "",
  pokemons : [],
  randPK: []
}

export default function counter(state = defaultSate, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        pag: state.pag + 1
      }
    case 'DECREMENT':
      if(state.pag > 1){
        return {
          ...state,
          pag: state.pag - 1
        }
      }
      return state;
    case 'NEWPK':
        return {
          ...state,
          nexpag: action.next,
          prepag: action.prev,
          pokemons: action.text
        }
    default:
      console.log(action)
      return state;
  }
}
