import { call, put } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants';
import request from '../../utils/request';

export const fetchUsers = () => ({
  type: FETCH_USERS_BEGIN,
});

export function* fetchUsersAction(action) {
  try {
    const url = 'http://localhost:3000/users';

    const users = yield call(request, url);

    yield put({
      type: FETCH_USERS_SUCCESS,
      data: users,
    });
  } catch (e) {
    yield put({
      type: FETCH_USERS_FAILURE,
      data: e,
    });
  }
}
