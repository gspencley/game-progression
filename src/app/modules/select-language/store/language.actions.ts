import { Action } from '@ngrx/store';
import { Language } from '../types/language.interface';

export enum LanguageActionTypes {
  LoadLanguages = '[Language] Load',
  LoadLanguagesSuccess = '[Language] LoadSuccess'
}

export class LoadLanguages implements Action {
  readonly type = LanguageActionTypes.LoadLanguages;
}

export class LoadLanguagesSuccess implements Action {
  readonly type = LanguageActionTypes.LoadLanguagesSuccess;
  constructor(public languages: Language[]) {}
}

export type LanguageAction = LoadLanguages | LoadLanguagesSuccess;