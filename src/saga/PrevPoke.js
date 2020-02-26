import { put, takeEvery, call, select } from 'redux-saga/effects'
import GetPokemon from './GetPokemon';

function* PrevPoke() {
    let state = yield select();
    if (state.pag > 1) {
        console.log("Obteniendo pokemons de pokeAPI");
        const myPK = yield call(GetPokemon, state.prepag);
        if (myPK) {
            // console.log(myPK.data.results);
            yield put({
                type: 'NEWPK',
                text: myPK.data.results,
                prev: myPK.data.previous,
                next: myPK.data.next
            });
            yield put({ type: 'DECREMENT' });
        }
    }
}

export default function* watchPrevPoke() {
    yield takeEvery('MINUSPOKE', PrevPoke)
}