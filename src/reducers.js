import { combineReducers } from 'redux';
import postsReducer from './containers/Posts/reducers';
import postReducer from './containers/Post/reducers';
import usersReducer from './containers/Users/reducers';

const reducers = combineReducers({
  postsReducer,
  postReducer,
  usersReducer,
});

export default reducers;
