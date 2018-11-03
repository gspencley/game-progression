import { Action } from '@ngrx/store';

export const AppActions  = {
  INITIALIZE:           'APP--INITIALIZE',
  INITIALIZE_LANGUAGES: 'APP--RETRIEVE-LANGUAGES',
  INITIALIZE_PROFILE:   'APP--INITIALIZE-PROFILE',
  USE_PROFILE_LANGUAGE: 'APP--USE-PROFILE_LANGUAGE'
};

export class Initialize implements Action {
  public readonly type = AppActions.INITIALIZE;
}

export class InitializeLanguages implements Action {
  public readonly type = AppActions.INITIALIZE_LANGUAGES;
}

export class InitializeProfile implements Action {
  public readonly type = AppActions.INITIALIZE_PROFILE;
}

export class UseProfileLanguage implements Action {
  public readonly type = AppActions.USE_PROFILE_LANGUAGE;
}