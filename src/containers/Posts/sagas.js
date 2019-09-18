import { takeLatest } from 'redux-saga/effects';

import { FETCH_POSTS_BEGIN } from './constants';
import { fetchPostsAction } from './actions';

function* postsSaga() {
  yield takeLatest(FETCH_POSTS_BEGIN, fetchPostsAction);
}

export default postsSaga;
