import { Action } from '@ngrx/store';

import { LanguageCode } from '../types/language/language-code.enum';
import { Language } from '../types/language/language.interface';

export const LanguagesActions = {
  RETRIEVE:         'LANGUAGES--RETRIEVE',
  RETRIEVE_SUCCESS: 'LANGUAGES--RETRIEVE_SUCCESS',
  UPDATE_LANGUAGE:  'LANGUAGES--UPDATE_LANGUAGE'
};

export class Retrieve implements Action {
  public readonly type = LanguagesActions.RETRIEVE;
  constructor(public onSuccess: Action=null) {}
}

export class RetrieveSuccess implements Action {
  public readonly type = LanguagesActions.RETRIEVE_SUCCESS;
  constructor(public languages: Language[], public dispatchNext: Action = null) {}
}

export class UseLanguage implements Action {
  public readonly type = LanguagesActions.UPDATE_LANGUAGE;
  constructor(public languageCode: LanguageCode) {}
}
