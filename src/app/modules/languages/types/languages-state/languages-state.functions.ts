import { LanguagesState } from './languages-state.interface';
import { createLanguage } from '../language/language.functions';

export function createLanguagesState(): LanguagesState {
  return {
    languages: [ createLanguage() ]
  };
}
