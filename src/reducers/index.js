import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import kudosReducer from './kudosReducer';
import personsReducer from './personsReducer';
import departamentsReducer from './departamentsReducer';

export default combineReducers({
  postsState: postsReducer,
  kudosesState: kudosReducer,
  personsState: personsReducer,
  departamentsState: departamentsReducer,
});
