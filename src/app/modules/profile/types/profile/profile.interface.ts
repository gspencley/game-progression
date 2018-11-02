import { Language } from '../../../languages/types/language/language.interface';

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  language: Language;
  averageNumberOfHoursPerDay: number;
}
