import { LanguagesState } from './languages-state.interface';

describe('LanguagesState', () => {
  let languagesState: LanguagesState;

  describe('when the LanguagesState is in a certain state', () => {
    beforeEach(() => {
      languagesState = {} as LanguagesState;
    });

    it('should be true', () => {
      expect(languagesState).toEqual({} as LanguagesState);
    });
  });
});
