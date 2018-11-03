import { LanguageCode } from './language-code.enum';

export interface Language {
  id: number;
  name: string;
  code: LanguageCode;
}
