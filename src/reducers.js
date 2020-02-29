const defaultSate = {
	pag: 0,
	nexpag: "https://pokeapi.co/api/v2/pokemon",
	prepag: "",
	pokemons: [],
	randPK: [],
	modal: false,
	url: "",
	pk: [],
	isLoading: true,
};

export default function counter(state = defaultSate, action) {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				pag: state.pag + 1,
			};
		case "DECREMENT":
			if (state.pag > 1) {
				return {
					...state,
					pag: state.pag - 1,
				};
			}
			return state;
		case "NEWPK":
			return {
				...state,
				nexpag: action.next,
				prepag: action.prev,
				pokemons: action.text,
			};
		case "PKURL":
			console.log(action.url);
			return {
				...state,
				url: action.url,
			};
		case "PKMODAL":
			return {
				...state,
				modal: !state.modal,
			};
		case "NEWP2K2":
			return {
				...state,
				pk: action.payload,
			};
		case "LOAD":
			return {
				...state,
				isLoading: !state.isLoading,
			};
		default:
			console.log(action);
			return state;
	}
}
