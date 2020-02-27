import { put, takeEvery, call, select,delay } from 'redux-saga/effects'
import GetPokemon from './GetPokemon';

function* ModalPoke() {
  yield put({ type: 'LOAD'});
  yield delay(1000);
  let state = yield select();
  console.log("Obteniendo pokemon");
  const myPK = yield call(GetPokemon, state.url);
  if (myPK) {
    // console.log(myPK.data);
    yield put({
      type: 'NEWP2K2',
      payload: myPK.data
    });
  }
  yield put({ type: 'LOAD'});
  yield put({type: 'PKMODAL'});
}

export default function* watchModalPoke() {
  yield takeEvery('MODALPK2', ModalPoke)
}