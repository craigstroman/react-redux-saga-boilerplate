import { call, put } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';
import request from '../../utils/request';

export const fetchPosts = () => ({
  type: FETCH_POSTS_BEGIN,
});

export function* fetchPostsAction(action) {
  try {
    const url = 'http://localhost:3000/posts';

    const posts = yield call(request, url);

    yield put({
      type: FETCH_POSTS_SUCCESS,
      data: posts,
    });
  } catch (e) {
    yield put({
      type: FETCH_POSTS_FAILURE,
      data: e,
    });
  }
}
