import { all, fork } from 'redux-saga/effects';

import postsSaga from './containers/Posts/sagas';
import postSaga from './containers/Post/sagas';
import usersSaga from './containers/Users/sagas';

export default function* rootSagas() {
  yield all([
    fork(postsSaga),
    fork(postSaga),
    fork(usersSaga),
  ]);
}
