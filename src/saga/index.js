import { put, takeEvery, call, select, all } from 'redux-saga/effects'
import axios from 'axios';
import watchNextPoke from './NextPoke';
import watchPrevPoke from './PrevPoke';
import watchModalPoke from './ModalPoke';
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

export function* watchPokeAsync() {
  yield takeEvery('NEWPOKE', PokeAsync)
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
      watchPrevPoke(),
      watchNextPoke(),
      watchPokeAsync(),
      watchModalPoke()
    ])
  }
  