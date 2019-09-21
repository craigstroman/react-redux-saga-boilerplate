import { takeLatest } from 'redux-saga/effects';

import { FETCH_USERS_BEGIN } from './constants';
import { fetchUsersAction } from './actions';

function* usersSaga() {
  yield takeLatest(FETCH_USERS_BEGIN, fetchUsersAction);
}

export default usersSaga;
