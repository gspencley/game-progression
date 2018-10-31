import { LanguageState } from '../types/language-state.interface';
import { LanguageAction, LanguageActionTypes, LoadLanguagesSuccess } from './language.actions';

const initialState: LanguageState = {
  languages: []
};

export const languageReducer = (state: LanguageState = initialState, action: LanguageAction): LanguageState => {
  switch (action.type) {
    case LanguageActionTypes.LoadLanguagesSuccess:
      const loadSuccessAction = action as LoadLanguagesSuccess;
      return { ...state, languages: loadSuccessAction.languages };
    default:
      return state;
  }
};
