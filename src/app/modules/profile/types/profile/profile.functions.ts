import { getLanguageById } from '../../../languages/types/language/language.functions';
import { Language } from '../../../languages/types/language/language.interface';
import { ProfileResponse } from '../profile-response/profile-response.interface';

import { Profile } from './profile.interface';

export function createProfile(): Profile {
    return {
      id: 0,
      firstName: '',
      lastName: '',
      image: '',
      language: null,
      averageNumberOfHoursPerDay: 0
    }
}

export function transformProfileResponse(profileResponse: ProfileResponse, languages: Language[]): Profile {
  console.log(languages);
  return {
    id: profileResponse.id,
    firstName: profileResponse.firstName,
    lastName: profileResponse.lastName,
    language: getLanguageById(profileResponse.id, languages),
    image: profileResponse.image,
    averageNumberOfHoursPerDay: profileResponse.averageNumberOfHoursPerDay
  };
}
