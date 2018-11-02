import { ProfileEditState } from '../types/profile-edit.state.interface';

import {
  ProfileEditAction,
  ProfileEditActionTypes,
  SaveProfileChangesError
} from './profile-edit.actions';

const initialState: ProfileEditState = {
  error: null
};

export const profileEditReducer = (
  state: ProfileEditState = initialState,
  action: ProfileEditAction
) => {
  switch (action.type) {
    case ProfileEditActionTypes.SaveError:
      const errorAction = action as SaveProfileChangesError;
      return { ...state, error: errorAction.error };
    default:
      return state;
  }
};
