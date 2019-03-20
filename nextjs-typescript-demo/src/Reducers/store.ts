import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

import Reducers from '@Reducers';

const initStore = (initialState = {}) => {
  return createStore(
    Reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware
      )
    )
  );
}

export default initStore;