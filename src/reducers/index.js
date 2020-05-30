import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import kudosReducer from './kudosReducer';
import personsReducer from './personsReducer';

export default combineReducers({
  postsState: postsReducer,
  kudosState: kudosReducer,
  personsState: personsReducer,
});
