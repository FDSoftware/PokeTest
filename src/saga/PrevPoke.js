import { put, takeEvery, call, select,delay } from 'redux-saga/effects'
import GetPokemon from './GetPokemon';

function* PrevPoke() {
    yield put({ type: 'LOAD'});
    yield delay(1000);
    let state = yield select();
    if (state.pag > 1) {
        console.log("Obteniendo pokemons de pokeAPI");
        const myPK = yield call(GetPokemon, state.prepag);
        if (myPK) {
            yield put({
                type: 'NEWPK',
                text: myPK.data.results,
                prev: myPK.data.previous,
                next: myPK.data.next
            });
            yield put({ type: 'DECREMENT' });
        }
    }
    yield put({ type: 'LOAD'});
    window.scrollTo(0, 0); 
}

export default function* watchPrevPoke() {
    yield takeEvery('MINUSPOKE', PrevPoke)
}