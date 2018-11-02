import { Language } from './language.interface';

export function createLanguage(): Language {
  return {
    id: 0,
    name: '',
    code: ''
  }
}

export function getLanguageById(id: number, languages: Language[]): Language {

  if(languages.length === 0) {
    return null;
  }

  const filtered = languages.filter((language) => language.id === id);
  if(filtered.length === 0) {
    return null;
  }

  return filtered[0];
}
