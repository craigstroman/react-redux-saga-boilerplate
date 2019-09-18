import { call, put } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { FETCH_POST_BEGIN, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './constants';
import request from '../../utils/request';

export const fetchPost = (id) => ({
  type: FETCH_POST_BEGIN,
  id,
});

export function* fetchPostAction(action) {
  try {
    const url = `http://localhost:3000/posts/${action.id}`;

    const post = yield call(request, url);

    yield put({
      type: FETCH_POST_SUCCESS,
      data: post,
    });
  } catch (e) {
    yield put({
      type: FETCH_POST_FAILURE,
      data: e,
    });
  }
}
