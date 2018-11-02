import { Action } from '@ngrx/store';

export const AppActions  = {
  RETRIEVE_LANGUAGES_AND_PROFILE: 'APP--RETRIEVE_LANGUAGES_AND_PROFILE'
};

export class RetrieveLanguagesAndProfile implements Action {
  public readonly type = AppActions.RETRIEVE_LANGUAGES_AND_PROFILE;
}