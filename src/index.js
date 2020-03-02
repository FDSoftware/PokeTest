// React / Redux / Saga:
import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import { rootSaga } from "./saga";

//ReactUI
import Grid from "@material-ui/core/Grid";

//Componentes para UI:
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import Loader from "./components/Loader";

// Redux / Saga init
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const action = (type, payload) => store.dispatch({ type, payload });

function App() {
	return (
		<div>
			{store.getState().isLoading ? (
				<div>
					<Loader />
				</div>
			) : (
				<div/>
			)}

			<Header />
			<Grid container justify="center" alignItems="center" direction="column">
				<Grid item xs={12} sm={6} >
					<Pokemon
						store={store}
						action={action}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

function render() {
	ReactDOM.render(<App />, document.getElementById("root"));
}

render();
store.subscribe(render);
