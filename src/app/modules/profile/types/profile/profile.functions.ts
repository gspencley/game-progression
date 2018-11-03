import { Integer } from '../../../../types/integer/integer.functions';
import { createLanguage, getLanguageById } from '../../../languages/types/language/language.functions';
import { Language } from '../../../languages/types/language/language.interface';
import { ProfileDto } from '../profile-dto/profile-dto.interface';

import { Profile } from './profile.interface';

export function createProfile(): Profile {
    return {
      id: 0,
      firstName: '',
      lastName: '',
      image: '',
      language: createLanguage(),
      averageNumberOfHoursPerDay: 0
    }
}

export function transformProfileDtoToProfile(profileResponse: ProfileDto, languages: Language[]=[]): Profile {
  return {
    id: Integer(profileResponse.id),
    firstName: profileResponse.firstName,
    lastName: profileResponse.lastName,
    language: getLanguageById(Integer(profileResponse.languageId), languages),
    image: profileResponse.image,
    averageNumberOfHoursPerDay: profileResponse.averageNumberOfHoursPerDay
  };
}
