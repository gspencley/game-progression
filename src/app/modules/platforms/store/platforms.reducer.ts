import { Action } from '@ngrx/store';

import { createPlatformsState } from '../types/platforms-state/platforms-state.functions';
import { PlatformsState } from '../types/platforms-state/platforms-state.interface';

import { PlatformsActions, RetrieveSuccess } from './platforms.actions';

export function platformsReducer(
  state: PlatformsState = createPlatformsState(),
  action: Action
): PlatformsState {
  switch (action.type) {

    case PlatformsActions.RETRIEVE_SUCCESS:

      const successAction = action as RetrieveSuccess;
      return {
        ...state,
        platforms: successAction.platforms
      };

    default:
      return state;
  }
}
