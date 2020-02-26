//import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Pokemon from './Pokemon'
import reducer from './reducers'
import { rootSaga } from './saga'

//ReactUI
import { CssBaseline } from '@material-ui/core';

//Componentes para UI:
import Header from './components/Header';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

function render() {
  ReactDOM.render(
    <div>
      <CssBaseline />
      <Header/>
      <Pokemon
        value={store}
        onIncrement={() => action('MOREPOKE')}
        onDecrement={() => action('MINUSPOKE')}
        GETPK={() => action('NEWPOKE')}
      />
    </div>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
