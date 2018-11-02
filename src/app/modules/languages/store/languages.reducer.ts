import { Action } from '@ngrx/store';

import { createLanguagesState } from '../types/languages-state/languages-state.functions';
import { LanguagesState } from '../types/languages-state/languages-state.interface';

import { LanguagesActions, RetrieveSuccess } from './languages.actions';

export function languagesReducer(
  state: LanguagesState = createLanguagesState(),
  action: Action
): LanguagesState {
  switch (action.type) {
    case LanguagesActions.RETRIEVE_SUCCESS:
      console.log('RETRIEVE_SUCCESS');
      const successAction = action as RetrieveSuccess;
      return {
        ...state,
        languages: successAction.languages
      };

    default:
      return state;
  }
}
