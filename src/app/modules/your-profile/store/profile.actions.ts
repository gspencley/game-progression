import { Action } from '@ngrx/store';
import { Profile } from '../types/profile.interface';
import { Language } from '../../select-language/types/language.interface';
import { HttpErrorResponse } from '@angular/common/http';

export enum ProfileActionTypes {
  Load            = '[Profile] Load',
  LoadError       = '[Profile] LoadError',
  LoadSuccess     = '[Profile] LoadSuccess',
  Update          = '[Profile] UpdateProfile',
  Initialize      = '[Profile] Initialize',
  UpdateLanguage  = '[Profile] UpdateLanguage',
}

export class LoadProfile implements Action {
  readonly type: string = ProfileActionTypes.Load;
}

export class LoadProfileError implements Action {
  readonly type: string = ProfileActionTypes.LoadError;
  constructor(public error: HttpErrorResponse) {}
}

export class LoadProfileSuccess implements Action {
  readonly type: string = ProfileActionTypes.LoadSuccess;
  constructor(public profile: Profile) {}
}

export class UpdateLanguage implements Action {
  readonly type: string = ProfileActionTypes.UpdateLanguage;
  constructor(public language: Language) {}
}

export class InitializeProfile implements Action {
  readonly type: string = ProfileActionTypes.Initialize;
}

export class UpdateProfile implements Action {
  readonly type: string = ProfileActionTypes.Update;
  constructor(public profile: Profile) {}
}

export type ProfileAction = LoadProfile |
  LoadProfileError |
  LoadProfileSuccess |
  InitializeProfile |
  UpdateLanguage |
  UpdateProfile;