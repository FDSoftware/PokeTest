import { put, takeEvery, call, select, all } from 'redux-saga/effects'
import axios from 'axios';

function GetPokemon (url){
    return axios.request({
        method: 'get',
        url: url
      });
}
// Our worker Saga: will perform the async increment task
export function* PokeAsync() {
  let state = yield select();
  console.log("Obteniendo pokemons de pokeAPI");
    const myPK = yield call(GetPokemon,state.nexpag);
    if (myPK){
       // console.log(myPK.data.results);
        yield put ({
            type: 'NEWPK', 
            text: myPK.data.results,
            prev: myPK.data.previous,
            next: myPK.data.next
          });
    }
}

export function* NextPoke(){
  let state = yield select();
  console.log("Obteniendo pokemons de pokeAPI");
    const myPK = yield call(GetPokemon,state.nexpag);
    if (myPK){
       // console.log(myPK.data.results);
        yield put ({
            type: 'NEWPK', 
            text: myPK.data.results,
            prev: myPK.data.previous,
            next: myPK.data.next
          });
        yield put ({type: 'INCREMENT'});
    }
}

export function* PrevPoke(){
  let state = yield select();
  console.log("Obteniendo pokemons de pokeAPI");
    const myPK = yield call(GetPokemon,state.prepag);
    if (myPK){
       // console.log(myPK.data.results);
        yield put ({
            type: 'NEWPK', 
            text: myPK.data.results,
            prev: myPK.data.previous,
            next: myPK.data.next
          });
        yield put ({type: 'DECREMENT'});
    }
}

export function* watchPrevPoke() {
  yield takeEvery('MINUSPOKE', PrevPoke)
}


export function* watchNextPoke() {
  yield takeEvery('MOREPOKE', NextPoke)
}

export function* watchPokeAsync() {
  yield takeEvery('NEWPOKE', PokeAsync)
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
      watchPrevPoke(),
      watchNextPoke(),
      watchPokeAsync()
    ])
  }
  