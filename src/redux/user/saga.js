import { all, takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure } from './slice';

import axios from 'axios';


function* fetchUsers() {
  // Lógica para buscar usuários de uma API ou outra fonte
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default all([
  takeLatest('user/fetchUsers', fetchUsers),
  //takeLastest pega a última ação disparada e cancela as anteriores
  //takeEvery pega todas as ações disparadas
]);

