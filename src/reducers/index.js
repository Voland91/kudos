import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import kudosReducer from './kudosReducer';
import personsReducer from './personsReducer';
import groupsReducer from './groupsReducer';

export default combineReducers({
  postsState: postsReducer,
  kudosesState: kudosReducer,
  personsState: personsReducer,
  groupsState: groupsReducer,
});
