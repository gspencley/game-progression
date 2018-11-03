import { LanguageResponse } from '../language-response/language-response.interface';

import { transformLanguageResponseArrayToLanguageArray } from './language.functions';

describe('Languages Functions', () => {
  describe('transformLanguagesResponseToLanguages', () => {
    it('Should convert string IDs to number', () => {
      const response: LanguageResponse = {
        id: '2',
        code: 'EN',
        name: 'English'
      };

      expect(transformLanguageResponseArrayToLanguageArray([response])).toEqual(
        [{id: 2, code: 'EN', name: 'English'}]
      );
    });
  });
});