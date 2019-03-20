import { DemoMode } from "@RootType";

/**
 * Layout Component Reducer State
 */
export interface ReducerState {
  readonly demoMode: DemoMode;
  readonly demoVersion: string;
}

/**
 * Layout Owned Props
 */
export interface OwnedProps {
  title?: string;
}

/**
 * Layout State to Props
 */
export interface StateToProps {
  demoMode: DemoMode;
  demoVersion: string;
}

/**
 * Layout Dispatch to Props
 */
export interface DispatchToProps {
  setDemoMode: (demoMode: DemoMode) => void;
}

/**
 * Connected Props
 */
export type ConnectedProps = OwnedProps & StateToProps & DispatchToProps;