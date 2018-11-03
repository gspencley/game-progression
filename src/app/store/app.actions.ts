import { Action } from '@ngrx/store';

export const AppActions  = {
  INITIALIZE:           'APP-INITIALIZE',
  INITIALIZE_LANGUAGES: 'APP-RETRIEVE-LANGUAGES',
  INITIALIZE_PROFILE:   'APP-INITIALIZE-PROFILE'
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
