import { createStore } from 'redux';
import kudos from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  kudos /* preloadState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
