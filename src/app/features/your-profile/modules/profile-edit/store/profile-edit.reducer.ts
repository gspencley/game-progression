import { Action } from '@ngrx/store';

import { createProfileEditState } from '../types/profile-edit-state/profile-edit-state.functions';
import { ProfileEditState } from '../types/profile-edit-state/profile-edit.state.interface';

import { ProfileEditActions, SaveProfileChangesError } from './profile-edit.actions';

export const profileEditReducer = (
  state: ProfileEditState = createProfileEditState(),
  action: Action
) => {
  switch (action.type) {
    case ProfileEditActions.SAVE_ERROR:
      const errorAction = action as SaveProfileChangesError;
      return { ...state, error: errorAction.error };
    default:
      return state;
  }
};
