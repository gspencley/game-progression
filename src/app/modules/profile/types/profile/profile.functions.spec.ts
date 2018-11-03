import { Language } from '../../../languages/types/language/language.interface';
import { ProfileDto } from '../profile-dto/profile-dto.interface';

import { transformProfileDtoToProfile } from './profile.functions';

describe('Profile Functions', () => {
  describe('transformProfileDtoToProfile', () => {

    let languages: Language[] = [];

    beforeEach(() => {
      languages = [
        {id: 1, name: 'English', code: 'EN'},
        {id: 2, name: 'French', code: 'FR'}
      ];
    });

    it('should return a mapped Profile object', () => {
      const profileData = {
        id: 1,
        firstName: 'Garett',
        lastName: 'Spencley',
        image: 'sexiest-man-alive',
        averageNumberOfHoursPerDay: 1
      };

      const profileDto: ProfileDto = {
        ...profileData,
        languageId: 2
      };

      expect(transformProfileDtoToProfile(profileDto, languages)).toEqual({
        ...profileData,
        language: languages[1]
      });
    });
  });
});
