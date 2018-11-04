import { Integer } from '../../../../types/integer/integer.functions';
import { LanguageResponse } from '../language-response/language-response.interface';

import { LanguageCode } from './language-code.enum';
import { Language } from './language.interface';

export function createLanguage(): Language {
  return {
    id: 0,
    name: '',
    code: '' as LanguageCode
  };
}

export function getLanguageById(id: number, languages: Language[]): Language {
  if(languages.length > 0) {
    const filtered = languages.filter((language) => language.id === id);
    if(filtered.length === 0) {
      return null;
    }

    return filtered[0];
  }

  return null;
}

export function transformLanguageResponseArrayToLanguageArray(response: LanguageResponse[]) {
  return response.map((item) => transformLanguageResponseToLanguage(item));
}

/*
 * Helpers
 */

function transformLanguageResponseToLanguage(response: LanguageResponse) {
  return {
    id: Integer(response.id),
    code: response.code,
    name: response.name
  };
}
