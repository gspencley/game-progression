import { Action } from '@ngrx/store';

import { createProfileState } from '../types/profile-state/profile-state.functions';
import { ProfileState } from '../types/profile-state/profile-state.interface';

import { ProfileActions, RetrieveSuccess, Update, UpdateLanguage } from './profile.actions';

export function profileReducer(
  state: ProfileState = createProfileState(),
  action: Action
): ProfileState {
  switch (action.type) {
    case ProfileActions.RETRIEVE_SUCCESS:
    case ProfileActions.UPDATE:
      const updateProfileAction = action as RetrieveSuccess | Update;
      return { ...state, profile: updateProfileAction.profile };

    case ProfileActions.UPDATE_LANGUAGE:
      const updateLanguageAction = action as UpdateLanguage;
      return {
        ...state,
        profile: {
          ...state.profile,
          language: updateLanguageAction.language
        }
      };

    default:
      return state;
  }
}
