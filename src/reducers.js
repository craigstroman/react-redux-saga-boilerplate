import { combineReducers } from 'redux';
import postsReducer from './containers/Posts/reducers';
import postReducer from './containers/Post/reducers';

const reducers = combineReducers({
  postsReducer,
  postReducer,
});

export default reducers;
