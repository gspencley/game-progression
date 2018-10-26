import { ProfileState } from '../types/profile-state';
import { LoadProfileSuccess, ProfileAction, ProfileActionTypes, UpdateLanguage } from './profile.actions';

const initialState: ProfileState = {
  profile: {
    id: 0,
    firstName: '',
    lastName: '',
    image: '',
    languageId: 1,
    averageNumberOfHoursPerDay: 0
  }
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction) => {
  switch (action.type) {
    case ProfileActionTypes.LoadSuccess:
      const loadSuccessAction = action as LoadProfileSuccess;
      return {...state, profile: loadSuccessAction.profile};
    case ProfileActionTypes.UpdateLanguage:
      const updateLanguageAction = action as UpdateLanguage;
      return {
        ...state,
        profile: {
          ...state.profile,
          languageId: updateLanguageAction.language.id
        }
      };
    default:
      return state;
  }
};
