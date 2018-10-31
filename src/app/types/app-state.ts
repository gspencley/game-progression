import { ProfileState } from '../modules/your-profile/types/profile-state.interface';
import { LanguageState } from '../modules/select-language/types/language-state.interface';

export interface AppState {
  readonly languageState: LanguageState;
  readonly profileState: ProfileState;
}
