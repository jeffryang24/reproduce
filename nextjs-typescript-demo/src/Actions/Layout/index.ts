import { createAction } from 'typesafe-actions';

import { DemoMode } from '@RootType';

import { SET_DEMO_MODE } from '@Constants/ActionType/Layout';

export const setDemoMode = createAction(SET_DEMO_MODE, action => {
  return (demoMode: DemoMode) => action(demoMode);
});