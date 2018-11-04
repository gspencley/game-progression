import { Action } from '@ngrx/store';

import { createProfileEditState } from '../types/profile-edit-state/profile-edit-state.functions';
import { ProfileEditState } from '../types/profile-edit-state/profile-edit.state.interface';
import { ProfileSaveState } from '../types/profile-save-state/profile-save-state.enum';

import { ProfileEditActions, SaveProfileChangesError } from './profile-edit.actions';

export const profileEditReducer = (
  state: ProfileEditState = createProfileEditState(),
  action: Action
) => {
  switch (action.type) {
    case ProfileEditActions.SAVE:
      return {
        ...state,
        profileSaveState: ProfileSaveState.WAITING
      };

    case ProfileEditActions.SAVE_SUCCESS:
      return {
        ...state,
        profileSaveState: ProfileSaveState.SUCCESS
      };

    case ProfileEditActions.SAVE_ERROR:
      const errorAction = action as SaveProfileChangesError;
      return {
        ...state,
        profileSaveState: ProfileSaveState.ERROR,
        error: errorAction.error
      };

    case ProfileEditActions.CANCEL:
      return {
        ...state,
        profileSaveState: ProfileSaveState.UNTOUCHED
      };

    default:
      return state;
  }
};
