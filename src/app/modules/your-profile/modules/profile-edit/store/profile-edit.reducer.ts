import { ProfileEditStateInterface } from '../types/profile-edit-state.interface';
import { ProfileEditAction, ProfileEditActionTypes, SaveProfileChangesError } from './profile-edit.actions';

const initialState: ProfileEditStateInterface = {
  error: null
};

export const profileEditReducer = (state: ProfileEditStateInterface = initialState, action: ProfileEditAction) => {
  switch(action.type) {
    case ProfileEditActionTypes.SaveError:
      const errorAction = action as SaveProfileChangesError;
      return { ...state, error: errorAction.error };
    default:
      return state;
  }
};
