import { put, takeEvery, call, select ,delay} from 'redux-saga/effects'
import GetPokemon from './GetPokemon';

function* NextPoke() {
  yield put({ type: 'LOAD'});
  yield delay(1000);
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
  yield put({ type: 'LOAD'});
}

export default function* watchNextPoke() {
  yield takeEvery('MOREPOKE', NextPoke)
}