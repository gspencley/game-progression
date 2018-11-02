import { Action } from '@ngrx/store';
import { Language } from '../types/language/language.interface';

export const LanguagesActions = {
  RETRIEVE:         'LANGUAGES--RETRIEVE',
  RETRIEVE_SUCCESS: 'LANGUAGES--RETRIEVE_SUCCESS',
};

export class Retrieve implements Action {
  public readonly type = LanguagesActions.RETRIEVE;
}

export class RetrieveSuccess implements Action {
  public readonly type = LanguagesActions.RETRIEVE_SUCCESS;
  constructor(public languages: Language[]) {}
}
