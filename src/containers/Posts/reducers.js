import { FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';

const postsInitialState = {
  posts: null,
  loading: true,
  error: null,
};

export default function postsReducer(state = postsInitialState, action) {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.data,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
