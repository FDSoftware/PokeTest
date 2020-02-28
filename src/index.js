//import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Pokemon from './Pokemon'
import reducer from './reducers'
import { rootSaga } from './saga'
import Loader from './components/loader'
//ReactUI
//import { CssBaseline } from '@material-ui/core';

//Componentes para UI:
import Header from './components/Header';

import Grid from '@material-ui/core/Grid';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

function App() {
  return (
    <div>
      {store.getState().isLoading ?
        <div>
          <Loader />
        </div> : <div></div>
      }
      {/*<CssBaseline />*/}

      <Header />
      <Grid container
        justify="center"
        alignItems="center"
        direction="column">
        <Grid item xs={12} sm={4}>
          <Pokemon
            value={store}
            onIncrement={() => {
              action('MOREPOKE')
            }}
            onDecrement={() => action('MINUSPOKE')}
            GETPK={() => action('NEWPOKE')}
          />
        </Grid>
      </Grid>
    </div>
  )
}

function render() {
  ReactDOM.render(<App />
    ,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
