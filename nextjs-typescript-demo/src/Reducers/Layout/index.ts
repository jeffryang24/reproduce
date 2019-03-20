import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";

import { DemoMode } from "@RootType";
import { ReducerState } from "@AppType/Components/Layout";

import * as LayoutAction from "@Actions/Layout";

export type LayoutActionTypeDef = ActionType<typeof LayoutAction>;

export const initialState: ReducerState = {
  demoMode: DemoMode.LIVE,
  demoVersion: "1.0.0"
};

const layoutReducer: Reducer<ReducerState, LayoutActionTypeDef> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(LayoutAction.setDemoMode): {
      return {
        ...state,
        demoMode: action.payload,
      }
    }

    default:
      return state;
  }
};

export default layoutReducer;
