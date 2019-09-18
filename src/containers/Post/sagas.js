import { takeLatest } from 'redux-saga/effects';

import { FETCH_POST_BEGIN } from './constants';
import { fetchPostAction } from './actions';

function* postSaga() {
  yield takeLatest(FETCH_POST_BEGIN, fetchPostAction);
}

export default postSaga;
