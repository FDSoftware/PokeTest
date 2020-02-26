import { put, takeEvery, call, select } from 'redux-saga/effects'
import GetPokemon from './GetPokemon';

function* NextPoke() {
  let state = yield select();
  console.log("Obteniendo pokemons de pokeAPI");
  const myPK = yield call(GetPokemon, state.nexpag);
  if (myPK) {
    // console.log(myPK.data.results);
    yield put({
      type: 'NEWPK',
      text: myPK.data.results,
      prev: myPK.data.previous,
      next: myPK.data.next
    });
    yield put({ type: 'INCREMENT' });
  }
}

export default function* watchNextPoke() {
  yield takeEvery('MOREPOKE', NextPoke)
}