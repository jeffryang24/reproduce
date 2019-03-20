// Action type defs
import { LayoutActionTypeDef } from '@Reducers/Layout';

// Reducer state
import { ReducerState as LayoutReducerState } from '@AppType/Components/Layout';

/**
 * Root Action Type Definition
 */
export type RootAction = LayoutActionTypeDef;

/**
 * Root State Type Definition
 */
export interface RootState {
  layout: LayoutReducerState;
}

/**
 * Demo Mode
 *
 * @description
 * Demo Mode type
 */
export enum DemoMode {
  LIVE = "LIVE",
  MAINTENANCE = "MAINTENANCE"
}