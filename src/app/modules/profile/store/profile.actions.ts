import { Action } from '@ngrx/store';

import { Language } from '../../languages/types/language/language.interface';
import { Profile } from '../types/profile/profile.interface';

export const ProfileActions = {
  RETRIEVE:         'PROFILE--RETRIEVE',
  RETRIEVE_SUCCESS: 'PROFILE--RETRIEVE_SUCCESS',
  RETRIEVE_ERROR:   'PROFILE--RETRIEVEE_ERROR',
  UPDATE:           'PROFILE--UPDATE',
  UPDATE_LANGUAGE:  'PROFILE--UPDATE_LANGUAGE'
};

export class Retrieve implements Action {
  public readonly type = ProfileActions.RETRIEVE;
  constructor(public onSuccess: Action = null) {}
}

export class RetrieveSuccess implements Action {
  public readonly type = ProfileActions.RETRIEVE_SUCCESS;
  constructor(public profile: Profile, public onSuccess: Action=null) {}
}

export class UpdateLanguage implements Action {
  public readonly type: string = ProfileActions.UPDATE_LANGUAGE;
  constructor(public language: Language) {}
}

export class Update implements Action {
  public readonly type: string = ProfileActions.UPDATE;
  constructor(public profile: Profile) {}
}
