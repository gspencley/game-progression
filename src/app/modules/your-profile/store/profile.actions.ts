import { Action } from '@ngrx/store';
import { Profile } from '../types/profile';
import { Language } from '../../select-language/types/language.interface';

export enum ProfileActionTypes {
  Load = '[Profile] Load',
  LoadSuccess = '[Profile] LoadSuccess',
  Initialize = '[Profile] Initialize',
  UpdateLanguage = '[Profile] UpdateLanguage'
}

export class LoadProfile implements Action {
  readonly type: string = ProfileActionTypes.Load;
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

export type ProfileAction = LoadProfile | LoadProfileSuccess | InitializeProfile | UpdateLanguage;

