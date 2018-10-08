import { ProfileState } from '../modules/your-profile/types/profile-state';
import { LanguageState } from '../modules/select-language/types/language.state';
import { NavigationState } from './navigation/navigation-state.interface';

export interface AppState {
  readonly languageState: LanguageState;
  readonly profileState: ProfileState;
}
