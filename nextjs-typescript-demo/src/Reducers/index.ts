import { combineReducers } from 'redux';

import { RootState, RootAction } from '@RootType';

// Reducer collections.
import LayoutReducer from '@Reducers/Layout';

const combinedReducer = combineReducers<RootState, RootAction>({
  layout: LayoutReducer
});

export default combinedReducer;