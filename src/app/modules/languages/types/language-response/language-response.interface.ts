import { LanguageCode } from '../language/language-code.enum';

export interface LanguageResponse {
  id: number|string;
  code: LanguageCode;
  name: string;
}
