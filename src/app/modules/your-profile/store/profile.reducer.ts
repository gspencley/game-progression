import { ProfileState } from '../types/profile-state.interface';
import { LoadProfileSuccess, ProfileAction, ProfileActionTypes, UpdateLanguage, UpdateProfile } from './profile.actions';

const initialState: ProfileState = {
  profile: {
    id: 0,
    firstName: '',
    lastName: '',
    image: '',
    languageId: 1,
    averageNumberOfHoursPerDay: 0
  },
  profileEditState: {
    error: null
  }
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction) => {
  switch (action.type) {
    case ProfileActionTypes.LoadSuccess:
      const loadSuccessAction = action as LoadProfileSuccess;
      return {...state, profile: loadSuccessAction.profile};

    case ProfileActionTypes.Update:
      const updateAction = action as UpdateProfile;
      return { ...state, profile: updateAction.profile };

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
