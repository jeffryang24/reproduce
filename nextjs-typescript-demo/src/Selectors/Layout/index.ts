import { RootState } from '@RootType';

const getState = (state: RootState) => state.layout;

export const getDemoMode = (state: RootState) => getState(state).demoMode;
export const getDemoVersion = (state: RootState) => getState(state).demoVersion;